import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import { css } from '@linaria/core';

import type { Route } from './+types/root';

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    @media (prefers-color-scheme: dark) {
        color-scheme: dark;

        html, body {
          --tw-bg-opacity: 1;
          background-color: rgb(3 7 18 / var(--tw-bg-opacity, 1));
          color: #fdfdfd;
        }
      }

    tab-size: 4;
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-feature-settings: normal;
    font-variation-settings: normal;
    line-height: inherit;

    * {
      box-sizing: border-box;
      border-width: 0;
      border-style: solid;
      border-color: #e5e7eb;
    }

    a {
      text-decoration: none;
    }

    ol, ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
`;

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

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
  } else if (import.meta.env.DEV && error && error instanceof Error) {
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

export const loader = async () => {
  const getVersion = () => '0.0.1';
  return {
    version: await getVersion(),
  };
};

// TODO: fix these types
// @ts-expect-error: Implicit any
export const HydrateFallback = ({ loaderData }: Route.HydrateFallbackProps) => {
  const { version } = loaderData;
  return (
    <div>
      <h1>Loading version: {version}</h1>
      <div>(spinner)</div>
    </div>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

const App = () => {
  return <Outlet />;
};

export default App;
