// 在JavaScript中，有两种方式创建正则表达式：
// 字面量语法：使用两个斜杠/包围正则表达式。
const regex = /pattern/;

// 构造函数语法：使用RegExp构造函数。
const regex = new RegExp("pattern");

// 用test()方法测试一个字符串是否匹配某个正则表达式
const regex = /hello/;
console.log(regex.test("hello world"));

// match()方法在字符串中查找匹配的内容
const text = "hello world";
const regex = /hello/;
console.log(text.match(regex));

// replace()方法替换文本中的匹配项
const text2 = "hello world";
const regex = /hello/;
console.log(text2.replace(regex, "hi"));
