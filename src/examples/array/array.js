// 数组是按次序排列的一组值。每个值的位置都有编号（从0开始），整个数组用方括号表示。

// 创建一个包含3个字符串元素的数组
let array = ["apple", "banana", "cherry"];

// 使用 `array[index]` 语法获取数组中指定位置的值
console.log(array[0]);


// 使用 `array[index] = value` 语法设置数组中指定位置的值
array[0] = "avocado";
console.log(array); 

// 使用 length 属性获取数组的长度
console.log(array.length); //输出 3

// 使用 push() 方法在数组的末尾添加元素
array.push("dragonfruit");
console.log(array); 

// 在nodejs中，多维数组也很容易创建和使用
let twoD = [];
for (let i = 0; i < 2; i++) {
  twoD[i] = [];
  for (let j = 0; j < 3; j++) {
    twoD[i][j] = i + j;
  }
}
console.log("2d:", twoD);
