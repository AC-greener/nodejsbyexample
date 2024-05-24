// 可以使用Promise构造函数来创建一个新的Promise对象。构造函数接受一个执行器（executor）函数作为参数，这个执行器函数接受两个函数作为参数：resolve和reject。
const myPromise = new Promise((resolve, reject) => {
  const condition = true;
  setTimeout(() => {
    if (condition) {
      resolve("Promise 已成功！");
    } else {
      reject("Promise 已失败！");
    }
  }, 1000);
});
// 使用.then()方法来处理Promise成功（fulfilled）的情况。.then()方法接受一个函数作为参数，这个函数的参数就是resolve传递的值。
myPromise.then((successMessage) => {
  console.log(successMessage);
});

// 使用.catch()方法处理Promise失败（rejected）的情况。.catch()方法接受一个函数作为参数，这个函数的参数就是reject传递的值。
myPromise.catch((errorMessage) => {
  console.error(errorMessage);
});

//  Promise支持链式调用，可以在一个Promise后面连续调用多个.then()方法，然后用一个.catch()来处理整个链中的任何错误。
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 已成功！");
  }, 1000);
});
myPromise2
  .then((result) => {
    console.log(result);
    return result + " 进行下一步处理";
  })
  .then((newResult) => {
    console.log(newResult);
  })
  .catch((error) => {
    console.error(error);
  });
