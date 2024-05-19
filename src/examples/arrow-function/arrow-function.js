// 箭头函数是在 ES6 中引入的新的函数定义语句，使用了 `=>` 这一简洁的语法。它让我们定义函数的语法更加简洁，并且在处理 this 关键字时也更为简易。

// 无参数时，使用空括号
var helloWorld = () => {
  console.log('Hello World!');
};
helloWorld()

// 单个参数时，可省略括号
var square = num => {
  return num * num;
};

// 多个参数时，使用括号包裹
var sum = (num1, num2) => {
  return num1 + num2;
};

// 当函数体只存在单一的 return 语句时，可以将大括号和 return 关键字省略，使函数定义变得更加简洁。
var square = num => num * num;
var sum = (num1, num2) => num1 + num2;