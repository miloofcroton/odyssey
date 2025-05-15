import React from 'react';
import { css, cx } from '@linaria/core';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const triggerStyles = css`
  border: 1px solid var(--input);
  display: flex;
  height: 2.25rem;
  width: fit-content;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-radius: 0.375rem;
  background-color: transparent;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  white-space: nowrap;
  box-shadow: var(--shadow-xs);
  transition: color 150ms, box-shadow 150ms;
  outline: none;

  &[data-placeholder] {
    color: var(--muted-foreground);
  }

  & svg:not([class*='text-']) {
    color: var(--muted-foreground);
  }

  &:focus-visible {
    border-color: var(--ring);
    box-shadow: 0 0 0 3px var(--ring-opacity-50);
  }

  &[aria-invalid="true"] {
    box-shadow: 0 0 0 3px var(--destructive-opacity-20);
    border-color: var(--destructive);
  }

  @media (prefers-color-scheme: dark) {
    &[aria-invalid="true"] {
      box-shadow: 0 0 0 3px var(--destructive-opacity-40);
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  & svg {
    pointer-events: none;
    flex-shrink: 0;
  }

  & svg:not([class*='size-']) {
    width: 1rem;
    height: 1rem;
  }

  & [data-slot="select-value"] {
    line-clamp: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const contentStyles = css`
  background-color: var(--popover);
  color: var(--popover-foreground);
  position: relative;
  z-index: 50;
  max-height: 24rem;
  min-width: 8rem;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid var(--border);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  &[data-state="open"] {
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state="closed"] {
    animation: contentHide 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-side="bottom"] {
    animation: slideFromTop 150ms;
  }

  &[data-side="left"] {
    animation: slideFromRight 150ms;
  }

  &[data-side="right"] {
    animation: slideFromLeft 150ms;
  }

  &[data-side="top"] {
    animation: slideFromBottom 150ms;
  }

  @keyframes contentShow {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes contentHide {
    from { opacity: 1; transform: scale(1); }
    to { opacity: 0; transform: scale(0.95); }
  }

  @keyframes slideFromTop {
    from { transform: translateY(-0.5rem); }
    to { transform: translateY(0); }
  }

  @keyframes slideFromRight {
    from { transform: translateX(0.5rem); }
    to { transform: translateX(0); }
  }

  @keyframes slideFromLeft {
    from { transform: translateX(-0.5rem); }
    to { transform: translateX(0); }
  }

  @keyframes slideFromBottom {
    from { transform: translateY(0.5rem); }
    to { transform: translateY(0); }
  }
`;

const viewportStyles = css`
  padding: 0.25rem;

  &[data-position="popper"] {
    height: var(--radix-select-trigger-height);
    width: 100%;
    min-width: var(--radix-select-trigger-width);
    scroll-margin-block: 0.25rem;
  }
`;

const labelStyles = css`
  padding: 0.5rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const itemStyles = css`
  position: relative;
  display: flex;
  width: 100%;
  cursor: default;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.125rem;
  padding: 0.375rem 2rem 0.375rem 0.5rem;
  font-size: 0.875rem;
  outline: none;
  user-select: none;

  &:focus {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  &[data-disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  & svg {
    pointer-events: none;
    flex-shrink: 0;
  }

  & svg:not([class*='text-']) {
    color: var(--muted-foreground);
  }

  & svg:not([class*='size-']) {
    width: 1rem;
    height: 1rem;
  }

  & [data-slot="select-item-text"] {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const separatorStyles = css`
  background-color: var(--border);
  margin: -0.25rem;
  margin-block: 0.25rem;
  height: 1px;
  pointer-events: none;
`;

const scrollButtonStyles = css`
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;

  & svg {
    width: 1rem;
    height: 1rem;
  }
`;

const indicatorWrapperStyles = css`
  position: absolute;
  right: 0.5rem;
  display: flex;
  width: 0.875rem;
  height: 0.875rem;
  align-items: center;
  justify-content: center;
`;

const Select = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) => {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
};

const SelectGroup = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) => {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
};

const SelectValue = ({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) => {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
};

const SelectTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) => {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cx(triggerStyles, className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

const SelectContent = ({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        position={position}
        className={cx(contentStyles, className)}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          data-slot="select-viewport"
          className={viewportStyles}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

const SelectLabel = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) => {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cx(labelStyles, className)}
      {...props}
    />
  );
};

const SelectItem = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) => {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cx(itemStyles, className)}
      {...props}
    >
      <span className={indicatorWrapperStyles}>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText data-slot="select-item-text">
        {children}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};

const SelectSeparator = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) => {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cx(separatorStyles, className)}
      {...props}
    />
  );
};

const SelectScrollUpButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) => {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cx(scrollButtonStyles, className)}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpButton>
  );
};

const SelectScrollDownButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) => {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cx(scrollButtonStyles, className)}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
  );
};

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
