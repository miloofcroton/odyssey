import { defineNitroConfig } from 'nitropack/config';

// https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: 'src',
  buildDir: '.build',
  compatibilityDate: '2024-12-16',
  experimental: {
    openAPI: true,
  },
  openAPI: {
    // production: 'runtime',
    meta: {
      title: 'My Awesome Project',
      description: 'This might become the next big thing.',
      version: '1.0',
    },
    route: '/_docs/openapi.json',
    ui: {
      scalar: {
        route: '/_docs/scalar',
        theme: 'purple',
      },
      swagger: {
        route: '/_docs/swagger',
      },
    },
  },
});
