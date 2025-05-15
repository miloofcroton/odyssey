/// <reference types="vitest" />
import mdx from '@mdx-js/rollup';
import { reactRouter } from '@react-router/dev/vite';
import wyw from '@wyw-in-js/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    wyw({
      include: ['**/*.{ts,tsx}'],
      displayName: false,
      babelOptions: {
        presets: ['@babel/preset-react', '@babel/preset-typescript'],
      },
    }),
    mdx(),
    // disables react router route creation while running tests
    !process.env.VITEST && reactRouter(),
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
    // for auto cleanup: https://testing-library.com/docs/react-testing-library/setup/#auto-cleanup-in-vitest
    globals: true,
    environment: 'jsdom',
  },
});
