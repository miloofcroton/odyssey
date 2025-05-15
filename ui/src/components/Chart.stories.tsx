import { css } from '@linaria/core';
import type { Meta } from '@storybook/react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from 'recharts';

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from './Chart';

const chartStyles = css`
  width: 100%;
  height: 100%;
  min-height: 24rem;
`;

const meta = {
  title: 'Components/Chart',
  component: ChartContainer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChartContainer>;

export default meta;

const data = [
  {
    date: 'Jan 22',
    Revenue: 2390,
    Profit: 1800,
  },
  {
    date: 'Feb 22',
    Revenue: 3480,
    Profit: 2300,
  },
  {
    date: 'Mar 22',
    Revenue: 4200,
    Profit: 2900,
  },
  {
    date: 'Apr 22',
    Revenue: 3800,
    Profit: 2600,
  },
  {
    date: 'May 22',
    Revenue: 4300,
    Profit: 3100,
  },
];

const config = {
  Revenue: {
    label: 'Revenue',
    color: 'hsl(var(--primary))',
  },
  Profit: {
    label: 'Profit',
    color: 'hsl(var(--muted-foreground))',
  },
};

export const LineExample = () => (
  <div className={css`width: 48rem;`}>
    <ChartContainer className={chartStyles} config={config}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          width={48}
        />
        <CartesianGrid strokeDasharray="4 4" />
        <ChartTooltip
          content={({ active, payload, label }) => (
            <ChartTooltipContent
              active={active}
              payload={payload}
              label={label}
            />
          )}
        />
        <Line
          type="monotone"
          dataKey="Revenue"
          strokeWidth={2}
          activeDot={{
            r: 4,
            style: { fill: 'hsl(var(--primary))' },
          }}
        />
        <Line
          type="monotone"
          dataKey="Profit"
          strokeWidth={2}
          activeDot={{
            r: 4,
            style: { fill: 'hsl(var(--muted-foreground))' },
          }}
        />
      </LineChart>
    </ChartContainer>
  </div>
);

export const BarExample = () => (
  <div className={css`width: 48rem;`}>
    <ChartContainer className={chartStyles} config={config}>
      <BarChart data={data}>
        <XAxis
          dataKey="date"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          width={48}
        />
        <CartesianGrid strokeDasharray="4 4" />
        <ChartTooltip
          content={({ active, payload, label }) => (
            <ChartTooltipContent
              active={active}
              payload={payload}
              label={label}
            />
          )}
        />
        <Bar dataKey="Revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Profit" fill="hsl(var(--muted-foreground))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  </div>
);

export const AreaExample = () => (
  <div className={css`width: 48rem;`}>
    <ChartContainer className={chartStyles} config={config}>
      <AreaChart data={data}>
        <XAxis
          dataKey="date"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          width={48}
        />
        <CartesianGrid strokeDasharray="4 4" />
        <ChartTooltip
          content={({ active, payload, label }) => (
            <ChartTooltipContent
              active={active}
              payload={payload}
              label={label}
            />
          )}
        />
        <Area
          type="monotone"
          dataKey="Revenue"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.2}
          strokeWidth={2}
        />
        <Area
          type="monotone"
          dataKey="Profit"
          stroke="hsl(var(--muted-foreground))"
          fill="hsl(var(--muted-foreground))"
          fillOpacity={0.2}
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  </div>
);
