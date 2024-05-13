// 在JavaScript中, 'function' 关键字用于声明函数.

// `plus` 函数接受两个参数 a 和 b,
// 通过 return 语句, 返回这两个参数的和.
function plus(a, b) {
  return a + b;
}

// `plusplus` 函数接受三个参数 a, b 和 c,
// 返回这三个参数的和.
function plusPlus(a, b, c) {
  return a + b + c;
}

// 执行`plus`函数
let res = plus(1, 2);

console.log('1+2 = ', res);

//  执行`plusplus`函数
res = plusPlus(1, 2, 3);

console.log('1+2+3 = ', res);

// 函数的默认参数
// 'name' 参数具有默认值 'Friend'，age默认值为18
function greet(name = "Friend", age = 18) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet();  // Prints: "Hello, my name is Friend and I am 30 years old."
greet('maimai');  // Prints: "Hello, my name is maimai and I am 30 years old."
