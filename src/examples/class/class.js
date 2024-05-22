// 在Nodejs中，class是一个用于创建对象的语法糖，可以创建具有属性和方法的对象类型。

// 可以使用class关键字创建一个类，使用constructor方法定义构造函数。
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 定义一个问候方法
  greet() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
  }
}

// 使用new关键字创建Person实例并调用greet方法
let person = new Person("John", 18);
person.greet();

// 通过extends关键字创建子类，继承Person类
class Programmer extends Person {
  constructor(name, age, title) {
    // 在构造函数中使用super()调用了父类的构造函数
    super(name, age);
    this.title = title;
  }

  coding() {
    console.log(`${this.name} is coding.`);
  }

  // 重写greet方法
  greet() {
    console.log(`Hello, I'm ${this.name}, ${this.age}, ${this.title}.`);
  }
}

// 创建Programmer实例并调用greet方法
let programmer = new Programmer("John", 18, "Front End");
programmer.coding();
programmer.greet();
