import React from 'react';
import { css, cx } from '@linaria/core';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';

const contentStyles = css`
  background-color: var(--popover);
  color: var(--popover-foreground);
  z-index: 50;
  width: 16rem;
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

const HoverCard = ({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) => {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
};

const HoverCardTrigger = ({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) => {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
};

const HoverCardContent = ({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) => {
  return (
    <HoverCardPrimitive.Content
      data-slot="hover-card-content"
      align={align}
      sideOffset={sideOffset}
      className={cx(contentStyles, className)}
      {...props}
    />
  );
};

export { HoverCard, HoverCardContent,HoverCardTrigger };
