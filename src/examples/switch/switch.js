// 多个if...else连在一起使用的时候，可以转为使用更方便的switch结构。

var i = 2;
// 基本的 switch 语句
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
// default 语句，它被用来处理所有未被前面的 case 语句匹配的情况。
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

// 在 switch 语句中或者 case 语句中也使用表达式
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
