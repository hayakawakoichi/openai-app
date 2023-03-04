module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-unexpected-multiline': 'error',
    'no-unused-vars': 'warn',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent'],
          'object',
        ],
        pathGroups: [
          {
            pattern: '{next,react}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  plugins: [],
}
