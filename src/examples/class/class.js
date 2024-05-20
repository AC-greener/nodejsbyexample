// JavaScript的class是一种基于原型的继承语法糖，提供了更接近传统面向对象语言的语法。

// 创建一个类。可以使用class关键字创建一个类，然后在其内部使用constructor方法定义构造函数。
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
// 使用new关键字创建类的实例
var person = new Person("John", 25);
console.log(person);

//除了构造函数，还可以定义其它方法。
class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, my name is ${this.name} 
      and I am ${this.age} years old.`);
  }
}
var person = new Person1("John", 25);
person.greet();

// 使用extends关键字可以创建一个继承自其它类的类。
class Employee extends Person {
  constructor(name, age, title) {
    // 在构造函数中使用super()调用了父类的构造函数
    super(name, age);
    this.title = title;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.title}.`
    );
  }
}
var employee = new Employee("John", 25, "Developer");
employee.greet();
