// Nodejs 提供内建的 JSON 序列化反序列化支持

const person = {
  name: "John",
  age: 30,
  city: "New York",
};
// 使用JSON.stringify()方法将Nodejs对象转换为JSON字符串。
const jsonStr = JSON.stringify(person);
console.log(jsonStr);

// 使用JSON.parse()方法将JSON字符串转换回Nodejs对象。
const jsonStr = '{"name":"John","age":30,"city":"New York"}';
const person = JSON.parse(jsonStr);
console.log(person.name);
