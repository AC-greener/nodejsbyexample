// 模板字符串可以让你更方便地创建包含变量或表达式的字符串。

// 可以通过反引号（`）来创建模板字符串，而不是单引号（'）或双引号（"） 
console.log(`Hello, Tom!`); 


// 在模板字符串中，你可以使用 ${} 插值来插入变量或表达式。
let name = 'John';
console.log(`Hello, ${name}!`); 

// 在模板字符串中插入表达式
let a = 5;
let b = 10;
console.log(`The sum of a and b is ${a + b}.`); 

// 模板字符串还可以用来创建多行字符串
console.log(`This is a string
spanning multiple
lines`);

// 也可以用来创建html标签
let title = 'Welcome to my website';
let body = 'Some text about my website.';

let html = `
    <h1>${title}</h1>
    <p>${body}</p>
`;
console.log(html);