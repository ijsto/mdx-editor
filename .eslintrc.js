module.exports = {
  extends: '@ijsto',
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'arrow-body-style': 0,
    'react/jsx-curly-newline': 0,
    // ___ REACT
    // eslint-disable-next-line sort-keys
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', 'jsx'],
      },
    ],
    'react/jsx-no-comment-textnodes': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/self-closing-comp': 1,
    'react/state-in-constructor': 0,
    // ___ REACT HOOKS
    // eslint-disable-next-line sort-keys
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    // ___ jsxA11y
    // eslint-disable-next-line sort-keys
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        assert: 'either',
      },
    ],
    'jsx-a11y/label-has-for': 0,
  },
  settings: { react: { version: 'detect' } },
};
