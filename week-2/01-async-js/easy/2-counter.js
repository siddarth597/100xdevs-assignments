function increaseCounter(counter) {
  setTimeout(() => {
    counter = counter + 1;
    console.log("Counter - ", counter);
    increaseCounter(counter);
  }, 1000);
}

let counter = 0;

increaseCounter(counter);
