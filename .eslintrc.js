module.exports = {
  // 提供预定义的环境变量。
  env: {
    browser: true,
    es2021: true,  // 添加所有 ECMAScript 2021 全局变量并自动将 ecmaVersion 解析器选项设置为 12
    node: true,
  },

  // 指定要使用的解析器
  parser: 'vue-eslint-parser',

  // 给解析器传入一些其他的配置参数
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: "latest",  // 支持的es版本
    sourceType: 'module',  // 代模块类型，默认为script，我们设置为module
  },

  // 使用预设的 lint 包
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],

  // 增强 ESlint 功能
  plugins: ['@typescript-eslint'],

  // 创建自定义规则。
  rules: {
    // 禁止出现未使用过的变量
    'no-unused-vars': 'error',
    // 缩进使用 4 个空格，并且 switch 语句中的 Case 需要缩进
    // https://eslint.org/docs/rules/indent
    'indent': ['error', 2, {
        'SwitchCase': 1,
        'flatTernaryExpressions': true
    }],
    // 只有一个参数时，箭头函数体可以省略圆括号
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': 'off',
  }
}