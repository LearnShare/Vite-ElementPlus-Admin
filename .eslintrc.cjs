module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'vue',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    indent: [
      'error',
      2,
      {
        MemberExpression: 2,
        SwitchCase: 1,
        ignoredNodes: [
          'ConditionalExpression',
        ],
      },
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 2,
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/html-self-closing': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'no-restricted-syntax': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'guard-for-in': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/multi-word-component-names': 'off',
    'import/prefer-default-export': 'off',
  },
};
