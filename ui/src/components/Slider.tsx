'use client';

import React from 'react';
import { css, cx } from '@linaria/core';
import * as SliderPrimitive from '@radix-ui/react-slider';

const rootStyles = css`
  position: relative;
  display: flex;
  width: 100%;
  touch-action: none;
  align-items: center;
  user-select: none;

  &[data-disabled] {
    opacity: 0.5;
  }

  &[data-orientation="vertical"] {
    height: 100%;
    min-height: 11rem;
    width: auto;
    flex-direction: column;
  }
`;

const trackStyles = css`
  background-color: var(--muted);
  position: relative;
  flex-grow: 1;
  overflow: hidden;
  border-radius: 9999px;

  &[data-orientation="horizontal"] {
    height: 0.375rem;
    width: 100%;
  }

  &[data-orientation="vertical"] {
    height: 100%;
    width: 0.375rem;
  }
`;

const rangeStyles = css`
  background-color: var(--primary);
  position: absolute;

  &[data-orientation="horizontal"] {
    height: 100%;
  }

  &[data-orientation="vertical"] {
    width: 100%;
  }
`;

const thumbStyles = css`
  display: block;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  border-radius: 9999px;
  background-color: var(--background);
  border: 1px solid var(--primary);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: color 150ms, box-shadow 150ms;

  &:hover {
    box-shadow: 0 0 0 4px var(--ring-opacity-50);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px var(--ring-opacity-50);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

interface SliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
  trackClassName?: string;
  rangeClassName?: string;
  thumbClassName?: string;
}

const Slider = ({
  className,
  trackClassName,
  rangeClassName,
  thumbClassName,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderProps) => {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cx(rootStyles, className)}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cx(trackStyles, trackClassName)}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cx(rangeStyles, rangeClassName)}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className={cx(thumbStyles, thumbClassName)}
        />
      ))}
    </SliderPrimitive.Root>
  );
};

export { Slider };
