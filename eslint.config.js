import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    rules: {
      'no-console': 'warn',
      'prefer-const': 'error',
    },
  },
  {
    ignores: [
      'dist/',
      '.astro/',
      'node_modules/',
      '*.config.js',
      '*.config.ts',
      'vitest.config.ts',
      'tests/**',
    ],
  },
];

