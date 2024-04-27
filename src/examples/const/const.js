// 'const'声明一个常量值。
const s = "22111constant";

console.log(s);
console.log(s);
console.log(s);

// 一个`const`语句可以出现在任何一个`var`语句可以出现的地方。
const n = 500000000;

console.log(n);

// 常量表达式可以执行任何精度的算数运算。
const d = 3e20 / n;
console.log(d);

// 数值常量在被显式转换之前没有类型。哈哈哈哈哈哈哈哈
// 数值常量在被显式转换之前没有类型。哈哈哈哈哈哈哈哈
console.log(Number(d));

// 数值通过使用它在需要特定类型的上下文中，比如一个变量赋值
console.log(Math.sin(n));

