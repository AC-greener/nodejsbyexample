```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
  }
}

let person = new Person("John", 18);
person.greet();

class Programmer extends Person {
  constructor(name, age, title) {
    super(name, age);
    this.title = title;
  }

  coding() {
    console.log(`${this.name} is coding.`);
  }

  greet() {
    console.log(`Hello, I'm ${this.name}, ${this.age}, ${this.title}.`);
  }
}

let programmer = new Programmer("John", 18, "Front End");
programmer.coding();
programmer.greet();

```
