// nodejs支持递归。 下面是是一个经典的示例。

// 阶乘函数
function factorial(n) {
    // factorial 函数在到达 factorial(0) 前一直调用自身。
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));  // 输出: 120