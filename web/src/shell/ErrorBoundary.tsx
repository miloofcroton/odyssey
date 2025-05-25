import {
  isRouteErrorResponse,
} from 'react-router';
import { css } from '@linaria/core';

import type { Route } from '../+types/root';

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  }
  else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className={css`
      padding: 1rem;
      padding-top: 4rem;
    `}>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className={css`
          overflow-x: auto;
          padding: 1rem;
          width: 100%;
        `}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
};
