// Template

// const time1 = new Date("Aug 9, 1995");
// const time2 = Date.parse("Aug 9, 1995");

// console.log(`time1`, time1);
// console.log(`time2`, time2);

// const getUserData = new Promise((resolve) => {
//   resolve({ name: "Bob", age: 12 });
// });

// const test = Promise.resolve("Great");

// getUserData.then((data) => console.log(data)).catch(() => console.log("error"));

// test.then((data) => console.log(data));

// const createArray = new Promise((resolve, reject) => {
//   const arr = [];

//   for (let i = 0; i < 5; i++) {
//     arr.push(i);
//   }

//   if (arr.length > 10) {
//     resolve(arr);
//   } else {
//     reject(2);
//   }
// });

// createArray
//   .then((result) => console.log(result))
//   .catch((number) => console.log(number));

// let loaderStatus = false;

function createArrayWithPromise(arraySize) {
  loaderStatus = true;
  return new Promise((resolve, reject) => {
    const arr = [];

    for (let i = 0; i < arraySize; i++) {
      arr.push(i);
    }

    if (arr.length > 10) {
      resolve(arr);
    } else {
      reject("error");
    }
  });
}

// let finalResult = null;

// function countTotalArray(array) {
//   return array.reduce((acc, number) => acc + number);
// }

// const mapArray = (arr) => arr.map((number) => number * 2);

// createArrayWithPromise(10000000)
//   .then((result) => result)
//   .then(mapArray)
//   //   .then((doubleArr) => doubleArr.reduce((acc, number) => acc + number))
//   .then(countTotalArray)
//   .then((reduceResult) => (finalResult = reduceResult))
//   .catch((err) => console.log(err));
// //   .finally(() => console.log("hello"));

// console.log(finalResult);

// createArrayWithPromise(5)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
// //   .finally(() => console.log("hello"));

// Promise.all([
//   createArrayWithPromise(5),
//   createArrayWithPromise(20),
//   createArrayWithPromise(35),
// ])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
// [promise1Result, promise2Result, promise3Result]
// Promise.race([
//   createArrayWithPromise(20),
//   createArrayWithPromise(35),
//   createArrayWithPromise(15),
// ])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
// Promise.allSettled([
//   createArrayWithPromise(5),
//   createArrayWithPromise(20),
//   createArrayWithPromise(35),
// ])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// promise
//   .then()

//   [(1, 2, 3)].map((number, ind, arr) => number * 2);
// [1, 2, 3].map((number) => number - 2);
// [1, 2, 3].map((number) => number + 2);

// const firstPromise = new Promise((ok, err) =>{
// })

// const time = new Promise((ok, error) => {
//   setTimeout(() => ok("Homer"), 3000);
//   setTimeout(() => error("Marge"), 5000);
// });

// time.then((data) => console.log(data)).catch((err) => console.log(err));
// const promise = new Promise((resolve, reject) => {
//   const arr = [];
//   for (let i = 0; i < 100000000; i++) {
//     arr.push(i);
//   }
//   const sum = arr.reduce((acc, el) => acc + el);

//   if (sum % 2 !== 0) {
//     resolve(sum);
//   } else {
//     reject("Error");
//   }
// });

// promise.then(
//   response => console.log(response),
//   err => console.log(err)
// );

// promise
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// function asyncLoop(count) {
//   return new Promise((resolve, reject) => {
//     const arr = [];
//     for (let i = 0; i < count; i++) {
//       arr.push(i);
//     }
//     const sum = arr.reduce((acc, el) => acc + el);

//     if (sum % 2 !== 0) {
//       resolve(sum);
//     } else {
//       reject("Error");
//     }
//   });
// }

// let thenResult = null;

// asyncLoop(100000034)
//   .then(num => num / 2)
//   .then(result => (thenResult = result))
//   .then(() => console.log(object))
//   .catch(err => console.log(err))
//   .finally(() => console.log("hello"));

// console.log(thenResult);

// Promise.all([asyncLoop(12), asyncLoop(26), asyncLoop(15)])
// .then(res =>
//   console.log(res)
// );

// Promise.race([asyncLoop(35), asyncLoop(10)])
// .then(data => console.log(data))

// Promise.all([asyncLoop(10), asyncLoop(100000), asyncLoop(1000000)])
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// Promise.allSettled([asyncLoop(12), asyncLoop(100000), asyncLoop(1000000)])
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// function userAsk(callback) {
//     const answer = prompt('How are you')

//     callback(answer)
// }

// const log = text => console.log(text);

// userAsk(log)

// function userAsk() {
//     const answer = prompt('How are you')

//    return Promise.resolve(answer)
// }

// userAsk().then(data => console.log(data))
