import React from 'react';
import { css, cx } from '@linaria/core';

const textareaStyles = css`
  border: 1px solid var(--input);
  background-color: transparent;
  min-height: 4rem;
  width: 100%;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  box-shadow: var(--shadow-xs);
  transition: color 150ms, box-shadow 150ms;
  outline: none;
  resize: vertical;

  &::placeholder {
    color: var(--muted-foreground);
  }

  &:focus-visible {
    border-color: var(--ring);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--ring) 50%, transparent);
  }

  &[aria-invalid="true"] {
    border-color: var(--destructive);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--destructive) 20%, transparent);

    @media (prefers-color-scheme: dark) {
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--destructive) 40%, transparent);
    }
  }

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Textarea = ({ className, ...props }: React.ComponentProps<'textarea'>) => {
  return (
    <textarea
      data-slot="textarea"
      className={cx(textareaStyles, className)}
      {...props}
    />
  );
};

export { Textarea };
