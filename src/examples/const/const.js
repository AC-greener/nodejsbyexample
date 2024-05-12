// `const`可以用来声明一个常量值，不可以被修改。

const cat = "baobao";
console.log(cat);

// 重新赋值给cat，会产生报错: 
// TypeError: Assignment to constant variable。
cat = "maimai"

// 一个`const`语句可以出现在任何一个`var`语句可以出现的地方。
const age = 1;
console.log(age);