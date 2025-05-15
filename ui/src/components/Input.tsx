import React from 'react';
import { css, cx } from '@linaria/core';

const inputStyles = css`
  border: 1px solid var(--input);
  background-color: transparent;
  height: 2.25rem;
  width: 100%;
  min-width: 0;
  border-radius: 0.375rem;
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  box-shadow: var(--shadow-xs);
  transition: color 150ms, box-shadow 150ms;
  outline: none;

  &::placeholder {
    color: var(--muted-foreground);
  }

  &::selection {
    background-color: var(--primary);
    color: var(--primary-foreground);
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

  &::file-selector-button {
    display: inline-flex;
    height: 1.75rem;
    border: none;
    background-color: transparent;
    color: var(--foreground);
    font-size: 0.875rem;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

const Input = ({ className, type, ...props }: React.ComponentProps<'input'>) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={cx(inputStyles, className)}
      {...props}
    />
  );
};

export { Input };
