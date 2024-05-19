```javascript
let array = ["apple", "banana", "cherry"];

console.log(array[0]); // 输出 "apple"


array[0] = "avocado";
console.log(array); 

console.log(array.length); //输出 3

array.push("dragonfruit");
console.log(array); 

let twoD = [];
for (let i = 0; i < 2; i++) {
  twoD[i] = [];
  for (let j = 0; j < 3; j++) {
    twoD[i][j] = i + j;
  }
}
console.log("2d:", twoD);

```
