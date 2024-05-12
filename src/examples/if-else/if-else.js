// nodejs 提供if结构，即只有满足预设的条件，才会执行相应的语句。

// 这里是一个基本的例子
if (7 % 2 === 0) {
  console.log("7 是偶数");
} else {
  console.log("7 是奇数");
}

// 你可以只用 `if` 而不使用 `else`
if (8 % 4 === 0) {
  console.log("8 能被 4 整除");
}

// `else if` 语句的使用
const num = 9;
if (num < 0) {
  console.log(num, "小于0");
} else if (num < 10) {
  console.log(num, "小于10");
} else {
  console.log(num, "大于10");
}
