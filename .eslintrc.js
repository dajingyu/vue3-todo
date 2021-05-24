module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "semi": 2,
    // 禁止使用多个空格
    "no-multi-spaces":2,
    // 不允许多个空行
    "no-multiple-empty-lines": [2, {"max":1}],

    // 禁止将变量初始化为 undefined
    "no-undef-init":2,
  }
}
