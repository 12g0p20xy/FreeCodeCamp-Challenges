## 介绍

计算器

[Demo](https://codepen.io/monad/pen/WENVod?editors=1010#0)

## 功能

- 数字和小数点按钮功能相近，统一使用 updateNum(str) 方法，将输入的数字和小数点作为字符串累计

- 所有运算符按钮功能相近，统一使用 operator(str) 方法，通过传入的参数 str 来传递不同的运算符

- 按下等于号使用 eval() 计算运算式

- 按下等于号计算出结果后，如果再按下运算符则可以从返回的结果继续进行运算，如果按下的是数字则重新开始运算

[另一个使用 jQuery 的写法](https://codepen.io/freeCodeCamp/pen/rLJZrA?editors=0010#0)