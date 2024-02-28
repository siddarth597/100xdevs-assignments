function increaseCounter(counter) {
  setInterval(() => {
    counter = counter + 1;
    console.log("Counter - ", counter);
  }, 1000);
}

let counter = 0;

increaseCounter(counter);
