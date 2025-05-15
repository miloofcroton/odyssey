import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
  ],
  // vitest configs: https://vitest.dev/config/
  test: {
    exclude: [
      '**\/node_modules/**',
      '**\/dist/**',
      '**\/e2e/**',
      '**\/e2e-examples/**',
      '**\/cypress/**',
      '**\/.{idea,git,cache,output,temp}/**',
      '**\/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
    ],
    environment: 'node',
  },
});
