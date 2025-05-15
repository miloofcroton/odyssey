// import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [
// renders into the root.tsx Outlet at /
//   index("routes/main"),
// ] satisfies RouteConfig;

import { type RouteConfig } from '@react-router/dev/routes';
import { flatRoutes } from '@react-router/fs-routes';

export default flatRoutes({
  rootDirectory: 'routes',
}) satisfies RouteConfig;
