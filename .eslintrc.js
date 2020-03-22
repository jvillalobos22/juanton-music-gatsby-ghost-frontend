module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ['ghost', 'react'],
  extends: [
    'plugin:ghost/node',
    'plugin:ghost/ember',
    'plugin:react/recommended'
  ],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: '16.0',
      flowVersion: '0.53'
    },
    propWrapperFunctions: ['forbidExtraProps']
  },
  rules: {
    'ghost/sort-imports-es6-autofix/sort-imports-es6': 'off',
    'ghost/ember/use-ember-get-and-set': 'off',
    'no-console': 'off',
    'no-inner-declarations': 'off',
    'valid-jsdoc': 'off',
    'require-jsdoc': 'off',
    'consistent-return': ['error'],
    'implicit-arrow-linebreak': 'off',
    'arrow-parens': 'off',
    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: true }
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    semi: ['off'],
    indent: ['off'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['off'],
    'react/prop-types': [
      'error',
      {
        ignore: ['children']
      }
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-boolean-value': 'off',
    'react/state-in-constructor': ['off', 'never'],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-newline': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-else-return': 'off',
    'no-shadow': 'off',
    camelcase: 'off',
    'comma-dangle': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'global-require': 'off'
  }
};
