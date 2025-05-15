import React from 'react';
import { css, cx } from '@linaria/core';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

const contentStyles = css`
  background-color: var(--primary);
  color: var(--primary-foreground);
  z-index: 50;
  width: fit-content;
  border-radius: 0.375rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  text-wrap: balance;

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

const arrowStyles = css`
  background-color: var(--primary);
  fill: var(--primary);
  z-index: 50;
  width: 0.625rem;
  height: 0.625rem;
  transform: translateY(calc(-50% - 2px)) rotate(45deg);
  border-radius: 2px;
`;

const TooltipProvider = ({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) => {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
};

const Tooltip = ({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) => {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
};

const TooltipTrigger = ({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) => {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
};

const TooltipContent = ({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cx(contentStyles, className)}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className={arrowStyles} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
};

export { Tooltip, TooltipContent, TooltipProvider,TooltipTrigger };
