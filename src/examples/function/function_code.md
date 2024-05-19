```javascript
function plus(a, b) {
  return a + b;
}

function plusPlus(a, b, c) {
  return a + b + c;
}

let res = plus(1, 2);
console.log('1+2 = ', res);

res = plusPlus(1, 2, 3);
console.log('1+2+3 = ', res);

function greet(name = "Friend", age = 18) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet();  // Prints: "Hello, my name is Friend and I am 30 years old."
greet('maimai');  // Prints: "Hello, my name is maimai and I am 30 years old."

```
