import React from 'react';
import { css, cx } from '@linaria/core';

const cardStyles = css`
  background-color: var(--card);
  color: var(--card-foreground);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  box-shadow: var(--shadow-sm);
`;

const cardHeaderStyles = css`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const cardTitleStyles = css`
  line-height: 1;
  font-weight: 600;
`;

const cardDescriptionStyles = css`
  color: var(--muted-foreground);
  font-size: 0.875rem;
`;

const cardContentStyles = css`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const cardFooterStyles = css`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const Card = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="card"
      className={cx(cardStyles, className)}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="card-header"
      className={cx(cardHeaderStyles, className)}
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="card-title"
      className={cx(cardTitleStyles, className)}
      {...props}
    />
  );
};

const CardDescription = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="card-description"
      className={cx(cardDescriptionStyles, className)}
      {...props}
    />
  );
};

const CardContent = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="card-content"
      className={cx(cardContentStyles, className)}
      {...props}
    />
  );
};

const CardFooter = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      data-slot="card-footer"
      className={cx(cardFooterStyles, className)}
      {...props}
    />
  );
};

export { Card, CardContent,CardDescription, CardFooter, CardHeader, CardTitle };
