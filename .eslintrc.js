module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },  //浏览器环境
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "parserOptions": {
    "ecmaVersion": 13,
    //此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  rules: {
    //"off" 或者 0 关闭规则
    //"warn" 或者1 将规则打开为警告（不影响退出代码）
    //"error" 或者2 将规则打开为错误（触发时退出代码为1）
    //如：'no-restricted-syntax': 0,  表示关闭该规则

    // 逻辑错误及最佳实践的规则
    "for-direction": 2, // 禁止for无限循环
    "no-empty": 2, // 禁止空块语句
    "no-ex-assign": 2, // 禁止对 catch 子句中的异常重新赋值。因为catch出来的都是错误信息，不需要重新赋值
    "no-extra-boolean-cast": 2, // 禁止不必要的布尔类型转换，如 !!true
    "no-extra-semi": 2, // 禁用不必要的分号
    "no-regex-spaces": 2, // 禁止正则表达式字面量中出现多个空格
    "no-unexpected-multiline": 2, // 禁止使用令人困惑的多行表达式
    "no-unreachable": 2, // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    "use-isnan": 2, // 要求调用 isNaN()检查 NaN
    "valid-typeof": 2, // 强制 typeof 表达式与有效的字符串进行比较
    "curly": 2, // 要求遵循大括号约定
    "default-case": 1, // 要求 Switch 语句中有 Default 分支
    "block-scoped-var": 2, // 把 var 语句看作是在块级作用域范围之内
    "no-empty-function": 1, // 禁止出现空函数
    "no-magic-numbers": [1, { 
      ignoreArrayIndexes: true,
      ignore: [-1, 0, 1, 2, 24, 60, 100, 1000],
    }], // 禁止使用魔术数字，魔术数字是在代码中多次出现的没有明确含义的数字。它最好由命名常量取代。
    "no-return-assign": 2, // 禁止在返回语句中赋值
    "no-return-await": 2, // 禁用不必要的 return await
    "no-useless-concat": 2, // 禁止没有必要的字符拼接
    "no-useless-call": 2, // 禁用不必要的 .call() 和 .apply()
    "no-useless-escape": 2, // 禁用不必要的转义
    "no-useless-return": 2, // 禁止多余的 return 语句
    "require-await": 2, // 禁止使用不带 await 表达式的 async 函数

    // 变量相关的规则
    "no-undef": 2, // 禁用未声明的变量
    'no-unused-vars': 2, // 禁止出现未使用过的变量
    "no-delete-var": 2, // 禁止删除变量
    "no-shadow": 2, // 禁止变量声明覆盖外层作用域的变量
    "no-shadow-restricted-names": 2, // 关键字不能被遮蔽
    "no-use-before-define": 2, // 禁止定义前使用

    // 代码风格
    "array-bracket-spacing": 2, // 强制在括号内前后使用空格
    "camelcase": 2, // 要求使用骆驼拼写法
    "func-call-spacing": 2, // 要求或禁止在函数标识符和其调用之间有空格
    "function-paren-newline": [1, 'multiline'], // 强制在函数括号内使用一致的换行
    "indent": [2, 2, { "SwitchCase": 1 }], // 强制使用一致的缩进
    "key-spacing": 2, // 强制在对象字面量的键和值之间使用一致的空格
    "keyword-spacing": 2, // 强制关键字周围空格的一致性
    "linebreak-style": 0, // 强制使用一致的换行符风格，用\n，不用\r\n
    "max-len": [2, {
      "code": 120,
      "ignoreUrls": true,
      "ignoreStrings": true, // mommo????"ignoreTrailingComments": true,
      "ignoreTemplateLiterals": true,
    }], // 强制行的最大长度
    "max-statements-per-line": 2, // 强制每一行中所允许的最大语句数量
    "new-cap": 2, // 要求构造函数首字母大写
    "no-mixed-spaces-and-tabs": 2, // 禁止使用 空格 和 tab 混合缩进
    "no-underscore-dangle": [2, { allowAfterThis: true }], // 禁止标识符中有悬空下划线
    "operator-linebreak": [2, 'before'], // 强制操作符使用一致的换行符风格
    "object-curly-spacing": [2, 'always'], // 强制在花括号中使用一致的空格
    "no-whitespace-before-property": 2, // 禁止属性前有空白

    // ES6相关规则
    "arrow-spacing": 2, // 要求箭头函数的箭头之前或之后有空格
    "no-const-assign": 2, // 不允许改变用const声明的变量
    "no-dupe-class-members": 2, // 不允许类成员中有重复的名称
    "prefer-const": 0, // 建议使用 const
  },
   
};
