```javascript
const s = "22111constant";

console.log(s);
console.log(s);
console.log(s);

const n = 500000000;

console.log(n);

const d = 3e20 / n;
console.log(d);

console.log(Number(d));

console.log(Math.sin(n));

[
  {
    comment: ["// 'const'声明一个常量值。", ],
    code: ['const s = "22111constant";'],
  },
  {
    comment: [],
    code: ['console.log(s);', 'console.log(s);', 'console.log(s);'],
  },
  {
    comment: ["// 'const'声明一个常量值。", "'// 数值常量在被显式转换之前没有类型。哈哈哈哈哈哈哈哈'"],
    code: ['const s = "22111constant";'],
  },
]
```