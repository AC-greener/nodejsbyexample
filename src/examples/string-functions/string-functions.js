// 字符串提供了很多常用的方法。

const example = ' Hello, NodeJS By Example! ';

// trim: 移除字符串两侧的空白字符
console.log("trim:       ", example.trim()); 

// "indexOf" 方法用于获取指定子字符串在字符串中第一次出现的索引
console.log("indexOf:    ", example.indexOf("NodeJS")); 

// slice: 提取字符串的一部分
console.log("slice:      ", example.slice(7,13)); 

// concat: 连接两个或更多字符串，并返回新的字符串
console.log("concat:     ", example.concat(" Enjoy learning.")); 

// includes: 检查一个字符串是否包含在另一个字符串中，返回 true 或 false
console.log("includes:   ", example.includes("NodeJS"));

// lastIndexOf: 返回指定搜索值在字符串中最后出现的位置：
console.log("lastIndexOf:", example.lastIndexOf('!'));

// "startsWith" 方法用于检查字符串是否以指定的子字符串开始
console.log("startsWith: ", example.startsWith(" Hello"));

// "endsWith" 方法用于检查字符串是否以指定的子字符串结束
console.log("endsWith:   ", example.endsWith("NodeJS! "));

// "repeat" 方法构造并返回一个新字符串，该字符串是重复指定次数的原字符串
console.log("Repeat:     ", example.trim().repeat(2)); 

// "replaceAll" 方法用于在字符串中使用一些字符替换其他字符串或正则表达式
console.log("replace:    ", example.replace(" ", "*")); 

// "split" 方法用于分隔字符串并返回一个包含结果子字符串的数组
console.log("split:      ", example.split(" "));

// "toLowerCase" 方法将字符串中的所有字符转为小写
console.log("toLowerCase:", example.toLowerCase()); 

// "toUpperCase" 方法将字符串中的所有字符转为大写
console.log("toUpperCase:", example.toUpperCase()); 

