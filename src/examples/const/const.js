// const关键字用于声明一个常量，一旦赋值后，其值就不能再被修改。

const PI = 3.14;
console.log(PI);

// const声明的常量具有块级作用域
if (true) {
  const a = 42;
  console.log(a);
}
// ReferenceError: a is not defined
console.log(a);

// 虽然使用const声明的变量不能被重新赋值，但如果它是一个对象，对象内部的属性可以被修改。
const person = {
  name: "John",
  age: 30,
};

person.age = 31;
console.log(person);
// TypeError: Assignment to constant variable.
person = { name: "Jane", age: 25 };
