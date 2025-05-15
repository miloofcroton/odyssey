/* eslint-disable @typescript-eslint/no-unused-vars */
import babelParser from '@babel/eslint-parser';
import jsonPlugin from '@eslint/json';
import markdownPlugin from '@eslint/markdown';
import stylisticPlugin from '@stylistic/eslint-plugin-js';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import jsxA11YPlugin from 'eslint-plugin-jsx-a11y';
import packageJsonPlugin from 'eslint-plugin-package-json/configs/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import globals from 'globals';
import tsPlugin from 'typescript-eslint';

const languageOptions = (globalsObj) => ({
  // parser: babelParser,
  parser: tsParser,
  ecmaVersion: 6,
  sourceType: 'module',

  globals: globalsObj,

  parserOptions: {
    // "sourceType": "module",
    // project: ['./tsconfig.json'],
    requireConfigFile: false,
  },
});

const baseTsConfig = {
  languageOptions: {
    ...languageOptions({
      ...globals.node,
      ...globals.browser,
    }),
  },
};

const allJavascriptFiles = [
  '**/*.js',
  '**/*.mjs',
  '**/*.cjs',
];
const allTypescriptFiles = [
  '**/*.ts',
];
const allJavaScriptXFiles = [
  '**/*.jsx',
];
const allTypeScriptXFiles = [
  '**/*.tsx',
];
const allScriptFiles = [
  ...allTypescriptFiles,
  ...allJavascriptFiles,
];
const allScriptXFiles = [
  ...allJavaScriptXFiles,
  ...allTypeScriptXFiles,
];
const allSrcFiles = [
  ...allScriptFiles,
  ...allScriptXFiles,
];

const allTestFiles = [
  '**/*.test.*',
  '**/*.spec.*',
  '**/*.e2e.*',
  '**/jest.setup.js',
  '**/setupMockServer.js',
];
const allNodeFiles = [
  '*.js',
  '.storybook/**/*.js',
];

const globalIgnoresConfig = {
  ignores: [
    '**/dist',
    '**/.dist',
    '**/.build',
    '**/.out',
    '**/dockerVolumes',
    '**/dockerVolumesStorybook',
    '**/storybook-static',
    '**/.storybook-static',
    '**/test-results.xml',
    '**/.nitro',
    '**/.react-router',
    // TODO: temporary
    '**/cms',
  ],
};

const codeStyleConfig = {
  files: allSrcFiles,
  plugins: { '@stylistic': stylisticPlugin },
  rules: {
    '@stylistic/indent': ['error', 2],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/quotes': ['error', 'single'],
    '@stylistic/quote-props': ['error', 'consistent'],
    '@stylistic/comma-dangle': ['error', 'always-multiline'],
    '@stylistic/comma-spacing': ['error', {
      'before': false,
      'after': true,
    }],

    '@stylistic/brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],

    // typical spacing for objects and arrays in javascript
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/array-bracket-spacing': ['error', 'never'],

    // consistent brackets
    // '@stylistic/array-bracket-newline': ['error', { consistent: true,

    // }],
    // '@stylistic/array-element-newline': ['error', { consistent: true,

    // }],
    // '@stylistic/object-curly-newline': ['error', {
    //   multiline: true,
    //   consistent: true,
    //   // 'ObjectExpression': 'always',
    //   // 'ObjectPattern': { 'multiline': true },
    //   // 'ImportDeclaration': 'never',
    //   // 'ExportDeclaration': { 'multiline': true, 'minProperties': 3 },
    // }],
  },
};

const generalScriptConfig = {
  // ...baseTsConfig,
  // plugins: {
  //   '@typescript-eslint': tsPlugin,
  // },
  ...tsPlugin.configs.base,
  files: allSrcFiles,
  rules: {
    // ...tsPlugin.configs.recommended[0].rules,

    // recommended-type-checked: default
    '@typescript-eslint/ban-ts-comment': 'error',
    // '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',

    // recommended-type-checked: modified
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        ignoreRestSiblings: true,
        destructuredArrayIgnorePattern: '^_',
      },
    ],

    // stylistic-type-checked: default
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/class-literal-property-style': 'error',
    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    // '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // stylistic-type-checked: modified
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',
  },
};

// requires parser
// const strictTypescript = {
//   ...tsPlugin.configs.base,
//   files: allSrcFiles,
//   languageOptions: {
//     parser: tsParser,
//     parserOptions: {
//       project: ['./tsconfig.json'],
//     },
//   },
//   rules: {
//     '@typescript-eslint/no-for-in-array': 'error',
//     '@typescript-eslint/await-thenable': 'error',
//     '@typescript-eslint/no-base-to-string': 'error',
//     '@typescript-eslint/no-duplicate-type-constituents': 'error',
//     '@typescript-eslint/no-floating-promises': 'error',
//     '@typescript-eslint/no-implied-eval': 'error',
//     '@typescript-eslint/non-nullable-type-assertion-style': 'error',
//     '@typescript-eslint/prefer-nullish-coalescing': 'error',
//     '@typescript-eslint/prefer-optional-chain': 'error',
//     '@typescript-eslint/no-misused-promises': 'error',
//     '@typescript-eslint/no-redundant-type-constituents': 'error',
//     '@typescript-eslint/no-unnecessary-type-assertion': 'error',
//     '@typescript-eslint/no-unsafe-argument': 'error',
//     '@typescript-eslint/no-unsafe-assignment': 'error',
//     '@typescript-eslint/no-unsafe-call': 'error',
//     '@typescript-eslint/no-unsafe-enum-comparison': 'error',
//     '@typescript-eslint/no-unsafe-member-access': 'error',
//     '@typescript-eslint/no-unsafe-return': 'error',
//     '@typescript-eslint/require-await': 'error',
//     '@typescript-eslint/restrict-plus-operands': 'error',
//     '@typescript-eslint/restrict-template-expressions': 'error',
//     '@typescript-eslint/unbound-method': 'error',
//   },
// };

const nodeConfig = {
  ...tsPlugin.configs.recommended[0],
  files: allNodeFiles,
  languageOptions: languageOptions({ ...globals.node }),
};

const reactConfig = {
  files: allScriptXFiles,

  plugins: {
    'react': reactPlugin,
    'react-hooks': reactHooksPlugin,
    'jsx-a11y': jsxA11YPlugin,
  },

  languageOptions: languageOptions({ ...globals.browser }),

  settings: {
    react: {
      pragma: 'React',  // Pragma to use, default to "React"
      fragment: 'Fragment',  // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // Defaults to the "defaultVersion" setting and warns if missing, and to "detect" in the future
      defaultVersion: '', // Default React version to use when the version you have installed cannot be detected.
    },
  },

  rules: {
    // react
    ...reactPlugin.configs.flat.recommended.rules,
    'react/button-has-type': 'off',
    'react/display-name': 'warn',
    'react/no-danger': 'error',
    'react/require-default-props': 'off',
    // 'react/jsx-sort-props': ['error', { reservedFirst: true }],
    'react/jsx-sort-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    // react hooks
    ...reactHooksPlugin.configs.recommended.rules,
    'react-hooks/exhaustive-deps': 'error',

    // accessibility
    ...jsxA11YPlugin.flatConfigs.recommended.rules,
    'jsx-a11y/label-has-associated-control': [
      2, {
        labelComponents: ['label'],
        labelAttributes: ['htmlFor'],
        controlComponents: ['input'],
      },
    ],
  },
};

const sortImportsConfig = {
  files: allSrcFiles,
  plugins: {
    'simple-import-sort': simpleImportSortPlugin,
    'import': importPlugin,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@web', './web'],
        ],

        extensions: ['.js', '.json', '.jsx'],
      },
    },
  },
  rules: {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    // 'import/no-duplicates': 'error',
    // 'import/no-relative-packages': 'error',
    // 'import/no-relative-parent-imports': 'error',

    'simple-import-sort/exports': 'error',
    // 'simple-import-sort/imports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],

          // Node.js builtins prefixed with `node:`.
          ['^node:'],

          // External packages. `react` related packages come first.
          ['^react', '^@?\\w'],

          // Internal packages.
          ['^(@|@web|@data)(/.*|$)'],

          // Side effect imports.
          ['^\\u0000'],

          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],

    // 'import/no-extraneous-dependencies': [
    //   'error', {
    //     devDependencies: [
    //       '**/*.test.{js,jsx}',
    //       '**/*.mock.js',
    //       '**/*.stories.{mdx,jsx}',
    //       '.storybook/**/*.{js,jsx}',
    //       '*.config.js',
    //       'jest.polyfills.js',
    //       'jest.setup.js',
    //       'src/lib/tools/mocks/**/*.{js,jsx}',
    //       'src/lib/tools/renderWithContext.jsx',
    //     ],
    //   },
    // ],
  },
};

const jsonFiles = ['**/*.json'];
const jsoncFiles = [
  '**/tsconfig.json',
  '.vscode/*.json',
];
const packageJsonFiles = [
  '**/package.json',
  '**/package-lock.json',
];

const jsonConfig = {
  files: jsonFiles,
  ignores: [...packageJsonFiles, ...jsoncFiles],
  language: 'json/json',
  plugins: { json: jsonPlugin },
  rules: {
    // 'json/no-duplicate-keys': ['error'],
    ...jsonPlugin.configs.recommended.rules,
  },
};

const jsoncConfig = {
  files: jsoncFiles,
  ignores: packageJsonFiles,
  language: 'json/jsonc',
  plugins: { json: jsonPlugin },
  languageOptions: {
    allowTrailingCommas: true,
    allowComments: true,
  },
  rules: {
    // 'json/*': ['error', 'allowComments'],
    // 'json/no-duplicate-keys': ['error', { 'allowComments': true }],
    ...jsonPlugin.configs.recommended.rules,
  },
};

const packageJsonConfig = {
  ...packageJsonPlugin,
  files: packageJsonFiles,
  rules: {
    ...packageJsonPlugin.rules,
    'package-json/order-properties': [
      'error',
      {
        // 'order': 'sort-package-json',
        'order': [
          'name',
          'version',
          'private',
          'repository',
          'author',
          'description',
          'keywords',
          'license',
          'workspaces',
          'type',
          'nodemonConfig',
          'main',
          'types',
          'bin',
          'sideEffects',
          'volta',
          'strapi',
          'engines',
          'overrides',
          'jest',
          'directories',
          'devDependencies',
          'dependencies',
          'scripts',
        ],
      },
    ],
  },
};

const markdownFiles = ['**/*.md'];

const markdownConfig = {
  files: markdownFiles,
  plugins: { markdown: markdownPlugin },
  language: 'markdown/commonmark',
  rules: {
    // ...markdownPlugin.configs.recommended.rules,
    'markdown/fenced-code-language': 'off',
    'markdown/heading-increment': 'warn',
    'markdown/no-duplicate-headings': 'off',
    'markdown/no-empty-links': 'warn',
    'markdown/no-html': 'off',
    'markdown/no-invalid-label-refs': 'warn',
    'markdown/no-missing-label-refs': 'off',
  },
};

const testingConfig = {
  files: allTestFiles,

  plugins: {
    'jest': jestPlugin,
    'jest-dom': jestDomPlugin,
    'testing-library': testingLibraryPlugin,
  },

  languageOptions: languageOptions({
    ...globals.node,
    ...globals.jest,
  }),

  rules: {
    ...jestPlugin.configs['flat/recommended'].rules,
    ...jestPlugin.configs['flat/style'].rules,
    'jest/padding-around-after-all-blocks': 'error',
    'jest/padding-around-after-each-blocks': 'error',
    'jest/padding-around-before-all-blocks': 'error',
    'jest/padding-around-before-each-blocks': 'error',
    'jest/padding-around-describe-blocks': 'error',
    'jest/padding-around-test-blocks': 'error',

    ...jestDomPlugin.configs['flat/recommended'].rules,

    ...testingLibraryPlugin.configs['flat/react'].rules,
    'testing-library/prefer-presence-queries': 'off',
  },
};

const storybookConfig = {
  files: ['**/*.stories.jsx'],

  rules: { 'react/jsx-props-no-spreading': 'off' },
};

const potentialErrorsConfig = [
  {
    files: [
      '**/src/lib/hydrate.jsx',
      '**/src/lib/hydrate.test.jsx',
      '**/src/server/html/Content.jsx',
      '**/src/server/html/Standalone.jsx',
      '**/src/server/app.jsx',
    ],

    rules: { 'no-undef': 'warn' },
  },
  {
    files: [
      '**/src/lib/hydrate.jsx',
      '**/src/server/html/Content.jsx',
      '**/src/server/html/Standalone.jsx',
      '**/src/lib/tools/removeFalsyItems.test.js',
    ],

    rules: { 'no-constant-binary-expression': 'warn' },
  },
  {
    files: [
      '**/src/lib/components/ProductGridContextProvider/ProductGridContextProvider.jsx',
      'src/lib/components/ShopSimilar/SimilarEntryPoint.jsx',
    ],

    rules: { 'no-unsafe-optional-chaining': 'warn' },
  },
  {
    ...reactConfig,
    rules: { 'react/no-danger': 'off' },
  },
  {
    ...testingConfig,
    rules: {
      // this should be investigated and turned back on
      // https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-unnecessary-act.md
      'testing-library/no-unnecessary-act': 'off',
      'testing-library/no-node-access': 'warn',
      'testing-library/no-wait-for-multiple-assertions': 'warn',
      'testing-library/prefer-screen-queries': 'warn',
      'testing-library/no-render-in-lifecycle': 'warn',
      'testing-library/no-container': 'warn',
      'testing-library/render-result-naming-convention': 'warn',
    },
  },
];

const config = [
  globalIgnoresConfig,
  codeStyleConfig,
  generalScriptConfig,
  nodeConfig,
  reactConfig,
  sortImportsConfig,
  jsonConfig,
  jsoncConfig,
  packageJsonConfig,
  markdownConfig,
  testingConfig,
  storybookConfig,
  ...potentialErrorsConfig,
];

export default config;
