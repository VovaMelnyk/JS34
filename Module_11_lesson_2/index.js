// Template

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
