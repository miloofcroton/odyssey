import { css } from '@linaria/core';
import type { Meta } from '@storybook/react';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Underline,
} from 'lucide-react';

import {
  ToggleGroup,
  ToggleGroupItem,
} from './ToggleGroup';

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const groupStyles = css`
  display: inline-flex;
  background-color: hsl(var(--muted));
  border-radius: 0.5rem;
  padding: 0.25rem;
`;

const itemStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  padding: 0.5rem;
  transition: all 0.2s;

  &[data-state="on"] {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }

  &:hover {
    background-color: hsl(var(--muted-foreground) / 0.1);
  }
`;

const iconStyles = css`
  width: 1rem;
  height: 1rem;
`;

const meta = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>;

export default meta;

export const Default = () => (
  <div className={wrapperStyles}>
    <ToggleGroup type="single" className={groupStyles}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold" className={itemStyles}>
        <Bold className={iconStyles} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic" className={itemStyles}>
        <Italic className={iconStyles} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline" className={itemStyles}>
        <Underline className={iconStyles} />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>
);

export const Multiple = () => (
  <div className={wrapperStyles}>
    <ToggleGroup type="multiple" className={groupStyles}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold" className={itemStyles}>
        <Bold className={iconStyles} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic" className={itemStyles}>
        <Italic className={iconStyles} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline" className={itemStyles}>
        <Underline className={iconStyles} />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>
);

export const Outline = () => (
  <div className={wrapperStyles}>
    <ToggleGroup type="single" className={css`
      display: inline-flex;
      border-radius: 0.5rem;
      border: 1px solid hsl(var(--border));
      padding: 0.25rem;
    `}>
      <ToggleGroupItem value="left" aria-label="Align left" className={itemStyles}>
        <AlignLeft className={iconStyles} />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center" className={itemStyles}>
        <AlignCenter className={iconStyles} />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right" className={itemStyles}>
        <AlignRight className={iconStyles} />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Align justify" className={itemStyles}>
        <AlignJustify className={iconStyles} />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>
);

export const Large = () => (
  <div className={wrapperStyles}>
    <ToggleGroup type="single" className={groupStyles}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold" className={css`
        ${itemStyles}
        padding: 0.75rem;
      `}>
        <Bold className={css`
          ${iconStyles}
          width: 1.25rem;
          height: 1.25rem;
        `} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic" className={css`
        ${itemStyles}
        padding: 0.75rem;
      `}>
        <Italic className={css`
          ${iconStyles}
          width: 1.25rem;
          height: 1.25rem;
        `} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline" className={css`
        ${itemStyles}
        padding: 0.75rem;
      `}>
        <Underline className={css`
          ${iconStyles}
          width: 1.25rem;
          height: 1.25rem;
        `} />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>
);

export const Disabled = () => (
  <div className={wrapperStyles}>
    <ToggleGroup type="single" className={groupStyles}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold" disabled className={itemStyles}>
        <Bold className={iconStyles} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic" disabled className={itemStyles}>
        <Italic className={iconStyles} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline" disabled className={itemStyles}>
        <Underline className={iconStyles} />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>
);
