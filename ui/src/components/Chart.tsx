import React from 'react';
import { css, cx } from '@linaria/core';
import * as RechartsPrimitive from 'recharts';

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: '', dark: '.dark' } as const;

export type ChartConfig = Record<string, {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )>

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />');
  }

  return context;
}

const chartContainerStyles = css`
  display: flex;
  aspect-ratio: 16/9;
  justify-content: center;
  font-size: 0.75rem;

  & .recharts-cartesian-axis-tick text {
    fill: var(--muted-foreground);
  }

  & .recharts-cartesian-grid line[stroke='#ccc'] {
    stroke: color-mix(in srgb, var(--border) 50%, transparent);
  }

  & .recharts-curve.recharts-tooltip-cursor {
    stroke: var(--border);
  }

  & .recharts-polar-grid[stroke='#ccc'] {
    stroke: var(--border);
  }

  & .recharts-radial-bar-background-sector {
    fill: var(--muted);
  }

  & .recharts-rectangle.recharts-tooltip-cursor {
    fill: var(--muted);
  }

  & .recharts-reference-line[stroke='#ccc'] {
    stroke: var(--border);
  }

  & .recharts-dot[stroke='#fff'] {
    stroke: transparent;
  }

  & .recharts-layer {
    outline: none;
  }

  & .recharts-sector {
    outline: none;
  }

  & .recharts-sector[stroke='#fff'] {
    stroke: transparent;
  }

  & .recharts-surface {
    outline: none;
  }
`;

const tooltipBaseStyles = css`
  border: 1px solid color-mix(in srgb, var(--border) 50%, transparent);
  background-color: var(--background);
  display: grid;
  min-width: 8rem;
  align-items: start;
  gap: 0.375rem;
  border-radius: 0.5rem;
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const tooltipLabelStyles = css`
  font-weight: 500;
`;

const tooltipItemStyles = {
  base: css`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 0.5rem;

    & > svg {
      color: var(--muted-foreground);
      height: 0.625rem;
      width: 0.625rem;
    }
  `,
  dot: css`
    align-items: center;
  `,
};

const tooltipIndicatorStyles = {
  base: css`
    flex-shrink: 0;
    border-radius: 2px;
  `,
  dot: css`
    height: 0.625rem;
    width: 0.625rem;
  `,
  line: css`
    width: 0.25rem;
  `,
  dashed: css`
    width: 0;
    border: 1.5px dashed;
    background-color: transparent;
  `,
  dashedNested: css`
    margin-top: 0.125rem;
    margin-bottom: 0.125rem;
  `,
};

const tooltipContentStyles = {
  base: css`
    display: flex;
    flex: 1;
    justify-content: space-between;
    line-height: 1;
  `,
  nested: css`
    align-items: flex-end;
  `,
  default: css`
    align-items: center;
  `,
};

const tooltipValueStyles = css`
  color: var(--foreground);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
`;

const tooltipLabelTextStyles = css`
  color: var(--muted-foreground);
`;

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<'div'> & {
  config: ChartConfig
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >['children']
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cx(chartContainerStyles, className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
      .map(([key, itemConfig]) => {
        const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color;
        return color ? `  --color-${key}: ${color};` : null;
      })
      .join('\n')}
}
`
          )
          .join('\n'),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = 'dot',
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<'div'> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: 'line' | 'dot' | 'dashed'
    nameKey?: string
    labelKey?: string
  }) {
  const { config } = useChart();

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }

    const [item] = payload;
    const key = `${labelKey || item?.dataKey || item?.name || 'value'}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value =
      !labelKey && typeof label === 'string'
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label;

    if (labelFormatter) {
      return (
        <div className={cx(tooltipLabelStyles, labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) {
      return null;
    }

    return <div className={cx(tooltipLabelStyles, labelClassName)}>{value}</div>;
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ]);

  if (!active || !payload?.length) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== 'dot';

  return (
    <div className={cx(tooltipBaseStyles, className)}>
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || 'value'}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color || item.payload.fill || item.color;

          return (
            <div
              key={item.dataKey}
              className={cx(
                tooltipItemStyles.base,
                indicator === 'dot' && tooltipItemStyles.dot
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cx(
                          tooltipIndicatorStyles.base,
                          indicator === 'dot' && tooltipIndicatorStyles.dot,
                          indicator === 'line' && tooltipIndicatorStyles.line,
                          indicator === 'dashed' && tooltipIndicatorStyles.dashed,
                          nestLabel && indicator === 'dashed' && tooltipIndicatorStyles.dashedNested
                        )}
                        style={
                          {
                            '--color-bg': indicatorColor,
                            '--color-border': indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cx(
                      tooltipContentStyles.base,
                      nestLabel ? tooltipContentStyles.nested : tooltipContentStyles.default
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className={tooltipLabelTextStyles}>
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className={tooltipValueStyles}>
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ChartLegend = RechartsPrimitive.Legend;

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = 'bottom',
  nameKey,
}: React.ComponentProps<'div'> &
  Pick<RechartsPrimitive.LegendProps, 'payload' | 'verticalAlign'> & {
    hideIcon?: boolean
    nameKey?: string
  }) {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      className={cx(
        'flex items-center justify-center gap-4',
        verticalAlign === 'top' ? 'pb-3' : 'pt-3',
        className
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || 'value'}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className={cx(
              '[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3'
            )}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== 'object' || payload === null) {
    return undefined;
  }

  const payloadPayload =
    'payload' in payload &&
    typeof payload.payload === 'object' &&
    payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === 'string'
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === 'string'
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string;
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config];
}

export {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
};
