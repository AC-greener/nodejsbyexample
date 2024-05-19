```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
var person = new Person("John", 25);
console.log(person);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, my name is ${this.name} 
      and I am ${this.age} years old.`);
  }
}
var person = new Person("John", 25);
person.greet();

class Employee extends Person {
  constructor(name, age, title) {
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

```
