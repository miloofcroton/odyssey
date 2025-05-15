import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './Slider';

const wrapperStyles = css`
  max-width: 24rem;
  width: 100%;
`;

const sliderStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  touch-action: none;
  user-select: none;
  height: 1.25rem;

  &[data-orientation="horizontal"] {
    height: 1.25rem;
  }

  &[data-orientation="vertical"] {
    flex-direction: column;
    width: 1.25rem;
    height: 12rem;
  }
`;

const trackStyles = css`
  position: relative;
  flex-grow: 1;
  background-color: hsl(var(--muted));
  border-radius: 9999px;
  cursor: pointer;

  &[data-orientation="horizontal"] {
    height: 0.25rem;
  }

  &[data-orientation="vertical"] {
    width: 0.25rem;
  }
`;

const rangeStyles = css`
  position: absolute;
  background-color: hsl(var(--primary));
  border-radius: 9999px;

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
  background-color: hsl(var(--background));
  box-shadow: 0 0 0 1px hsl(var(--primary));
  border-radius: 9999px;
  cursor: grab;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 0 0 2px hsl(var(--primary));
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--primary));
  }

  &:active {
    cursor: grabbing;
  }
`;

type SliderProps = React.ComponentProps<typeof Slider>;

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: SliderProps) => (
    <div className={wrapperStyles}>
      <Slider
        defaultValue={[33]}
        max={100}
        step={1}
        className={sliderStyles}
        trackClassName={trackStyles}
        rangeClassName={rangeStyles}
        thumbClassName={thumbStyles}
        {...args}
      />
    </div>
  ),
};

export const Range: Story = {
  render: (args: SliderProps) => (
    <div className={wrapperStyles}>
      <Slider
        defaultValue={[25, 75]}
        max={100}
        step={1}
        className={sliderStyles}
        trackClassName={trackStyles}
        rangeClassName={rangeStyles}
        thumbClassName={thumbStyles}
        {...args}
      />
    </div>
  ),
};

export const Vertical: Story = {
  render: (args: SliderProps) => (
    <Slider
      defaultValue={[33]}
      max={100}
      step={1}
      orientation="vertical"
      className={sliderStyles}
      trackClassName={trackStyles}
      rangeClassName={rangeStyles}
      thumbClassName={thumbStyles}
      {...args}
    />
  ),
};
