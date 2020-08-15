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
    'new-cap': 0,
  },
};
