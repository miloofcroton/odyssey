import React from 'react';
import { css, cx } from '@linaria/core';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { CircleIcon } from 'lucide-react';

const radioGroupStyles = css`
  display: grid;
  gap: 0.75rem;
`;

const radioGroupItemStyles = css`
  aspect-ratio: 1;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  border-radius: 9999px;
  border: 1px solid hsl(var(--input));
  color: hsl(var(--primary));
  box-shadow: var(--shadow-xs);
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  &:focus-visible {
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 3px hsl(var(--ring) / 0.5);
  }

  &[aria-invalid="true"] {
    border-color: hsl(var(--destructive));
    box-shadow: 0 0 0 3px hsl(var(--destructive) / 0.2);
  }

  @media (prefers-color-scheme: dark) {
    &[aria-invalid="true"] {
      box-shadow: 0 0 0 3px hsl(var(--destructive) / 0.4);
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const indicatorStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const circleIconStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.5rem;
  height: 0.5rem;
  transform: translate(-50%, -50%);
  fill: hsl(var(--primary));
`;

const RadioGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) => {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cx(radioGroupStyles, className)}
      {...props}
    />
  );
};

const RadioGroupItem = ({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) => {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cx(radioGroupItemStyles, className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className={indicatorStyles}
      >
        <CircleIcon className={circleIconStyles} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
};

export { RadioGroup, RadioGroupItem };
