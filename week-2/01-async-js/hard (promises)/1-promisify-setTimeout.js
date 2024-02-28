/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

async function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
}

// (async () => {
//   await wait(4000);
//   console.log("done");
// })();

module.exports = wait;
