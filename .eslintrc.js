module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    '@ionic/eslint-config/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'import', 'jsdoc'],
  ignorePatterns: ['**/node_modules/**', '**/*.html', 'www/**', 'dist/**'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        usePrettierrc: true,
        arrowParens: 'avoid',
      },
    ],
    'max-len': [
      'error',
      {
        code: 90,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'max-depth': ['error', 4],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'array-bracket-spacing': [
      'error',
      'never',
      {
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    eqeqeq: ['error', 'smart'],
    'no-extra-semi': 'error',
    'no-redeclare': 'error',
    'no-eval': 'error',
    'eol-last': 'error',
    'jsdoc/no-types': 'error',
    'no-restricted-imports': ['error', 'rxjs/Rx'],
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@senna-ui/**',
            group: 'external',
            position: 'after',
          },
        ],
        groups: [['external', 'builtin'], 'parent', 'sibling', 'index'],
        pathGroupsExcludedImportTypes: ['object'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    // disable rules
    'arrow-parens': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
