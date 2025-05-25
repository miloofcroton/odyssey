import {
  Outlet,
} from 'react-router';

import type { Route } from './+types/root';

export { ErrorBoundary } from './shell/ErrorBoundary';
export { HydrateFallback } from './shell/HydrateFallback';
export { Layout } from './shell/Layout';
export { globals } from './styles/GlobalStyles';

export const links: Route.LinksFunction = () => [
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
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

export const loader = async () => {
  const getVersion = () => '0.0.1';
  return {
    version: await getVersion(),
  };
};

const App = () => {
  return <Outlet />;
};

export default App;
