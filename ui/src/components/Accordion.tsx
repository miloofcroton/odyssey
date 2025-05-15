import React from 'react';
import { css, cx } from '@linaria/core';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';

const Accordion = ({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) => {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
};

const AccordionItem = ({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) => {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cx(
        css`
          border-bottom: 1px solid;
          &:last-child {
            border-bottom: 0;
          }
        `,
        className
      )}
      {...props}
    />
  );
};

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) => {
  return (
    <AccordionPrimitive.Header className={css`display: flex;`}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cx(
          css`
            display: flex;
            flex: 1;
            align-items: flex-start;
            justify-content: space-between;
            gap: 1rem;
            border-radius: 0.375rem;
            padding: 1rem 0;
            text-align: left;
            font-size: 0.875rem;
            font-weight: 500;
            transition: all;
            outline: none;

            &:hover {
              text-decoration: underline;
            }

            &:focus-visible {
              border-color: var(--ring);
              --tw-ring-color: rgba(var(--ring), 0.5);
              --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
              --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
              box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
            }

            &:disabled {
              pointer-events: none;
              opacity: 0.5;
            }

            &[data-state='open'] > svg {
              transform: rotate(180deg);
            }
          `,
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className={css`
          pointer-events: none;
          width: 1rem;
          height: 1rem;
          flex-shrink: 0;
          transform: translateY(0.125rem);
          transition: transform 200ms;
          color: var(--muted-foreground);
        `} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
};

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) => {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={css`
        overflow: hidden;
        font-size: 0.875rem;

        @keyframes accordion-up {
          from {
            height: var(--radix-accordion-content-height);
          } to {
            height: 0;
          }
        }

        @keyframes accordion-down {
          from {
            height: 0;
          } to {
            height: var(--radix-accordion-content-height);
          }
        }

        &[data-state='closed'] {
          animation: accordion-up 200ms ease-out;
        }

        &[data-state='open'] {
          animation: accordion-down 200ms ease-out;
        }
      `}
      {...props}
    >
      <div className={cx(
        css`
          padding: 0 0 1rem 0;
        `,
        className
      )}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
};

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
