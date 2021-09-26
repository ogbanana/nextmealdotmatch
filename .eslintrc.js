module.exports = {
  env: {
    es6: true,
  },
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
}
