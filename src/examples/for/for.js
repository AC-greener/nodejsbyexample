// for语句是循环命令的一种形式，可以指定循环的起点、终点和终止条件。

// 经典的初始/条件/后续 `for` 循环。
for (let i = 0; i <= 3; i++) {
  console.log(i);
}

// 不带条件的 `for` 循环将一直重复执行，
// 直到在循环体内使用了 `break` 或者从函数返回跳出循环。
for (;;) {
  console.log("loop");
  break;
}

// 你也可以使用 `continue` 直接进入下一次循环。
for (let n = 0; n <= 5; n++) {
  if (n % 2 == 0) {
    continue;
  }
  console.log(n);
}
