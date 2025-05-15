import React from 'react';
import { css, cx } from '@linaria/core';
import * as PopoverPrimitive from '@radix-ui/react-popover';

const contentStyles = css`
  background-color: var(--popover);
  color: var(--popover-foreground);
  z-index: 50;
  width: 18rem;
  border-radius: 0.375rem;
  border: 1px solid var(--border);
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  outline: none;

  &[data-state="open"] {
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state="closed"] {
    animation: contentHide 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-side="bottom"] { animation: slideFromTop 150ms; }
  &[data-side="left"] { animation: slideFromRight 150ms; }
  &[data-side="right"] { animation: slideFromLeft 150ms; }
  &[data-side="top"] { animation: slideFromBottom 150ms; }

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

const Popover = ({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) => {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
};

const PopoverTrigger = ({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) => {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
};

const PopoverContent = ({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cx(contentStyles, className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
};

const PopoverAnchor = ({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) => {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
};

export { Popover, PopoverAnchor,PopoverContent, PopoverTrigger };
