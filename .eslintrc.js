module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended', // Include Prettier plugin
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'prettier', // Ensure Prettier is included as a plugin
  ],
  rules: {
    'prettier/prettier': "off", // Add additional rules as needed
  },
};
