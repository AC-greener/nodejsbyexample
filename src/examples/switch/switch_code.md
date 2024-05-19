```javascript
var i = 2;
switch (i) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
}

var fruit = "mango";
switch (fruit) {
  case "apple":
    console.log("Apple is good for me.");
    break;
  case "banana":
    console.log("I like banana.");
    break;
  default:
    console.log("Sorry, we do not have " + fruit + ".");
}

function whatAmI(i) {
  switch (typeof i) {
    case "boolean":
      console.log("I'm a boolean");
      break;
    case "number":
      console.log("I'm a number");
      break;
    default:
      console.log(`Unknown type ${typeof i}`);
  }
}
whatAmI(true);
whatAmI(1);
whatAmI("hey");

```
