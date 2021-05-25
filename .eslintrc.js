module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['google'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'space-before-function-paren': ['error', 'always'],
    'linebreak-style': 0,
    'new-cap': 0,
  },
};
