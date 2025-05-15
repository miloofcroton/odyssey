import { css } from '@linaria/core';
import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';
import { Switch } from './Switch';

const wrapperStyles = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const switchStyles = css`
  position: relative;
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  background-color: hsl(var(--muted));
  transition: background-color 0.2s;

  &[data-state="checked"] {
    background-color: hsl(var(--primary));
  }

  &::before {
    content: "";
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
    background-color: hsl(var(--background));
    transition: transform 0.2s;
  }

  &[data-state="checked"]::before {
    transform: translateX(1rem);
  }
`;

const labelStyles = css`
  font-size: 0.875rem;
  line-height: 1;
  color: hsl(var(--foreground));
`;

type SwitchProps = React.ComponentProps<typeof Switch>;

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: SwitchProps) => (
    <div className={wrapperStyles}>
      <Switch id="airplane-mode" className={switchStyles} {...args} />
      <Label htmlFor="airplane-mode" className={labelStyles}>
        Airplane Mode
      </Label>
    </div>
  ),
};

export const Checked: Story = {
  render: (args: SwitchProps) => (
    <div className={wrapperStyles}>
      <Switch
        id="notifications"
        defaultChecked
        className={switchStyles}
        {...args}
      />
      <Label htmlFor="notifications" className={labelStyles}>
        Notifications
      </Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args: SwitchProps) => (
    <div className={wrapperStyles}>
      <Switch
        id="wifi"
        disabled
        className={switchStyles}
        {...args}
      />
      <Label htmlFor="wifi" className={labelStyles}>
        Wi-Fi
      </Label>
    </div>
  ),
};
