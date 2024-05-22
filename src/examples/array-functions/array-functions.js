// 数组提供了很多常用的方法。

const arr = ['Hello', 'NodeJS'];

console.log("push:    ", arr.push('Enjoy'), arr); 
console.log("pop:     ", arr.pop(), arr); 
console.log("unshift: ", arr.unshift('Start'), arr); 
console.log("shift:   ", arr.shift(), arr); 
console.log("indexOf: ", arr.indexOf('NodeJS')); 
console.log("slice:   ", arr.slice(1, 3)); 
console.log("concat:  ", arr.concat(['New', 'Elements'])); 
console.log("includes:", arr.includes('NodeJS'));
console.log("join:    ", arr.join(' '));
console.log("reverse: ", [...arr].reverse());
console.log("sort:    ", [...arr].sort()); 
console.log("map:     ", arr.map(word => word.toUpperCase())); 
console.log("filter:  ", arr.filter(word => word.length > 4)); 
console.log("reduce:  ", arr.reduce((acc, current) => acc + ' ' + current)); 