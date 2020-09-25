let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done"), 2000);
});

console.log(promise);

// All created promises can invoke two methods then() and catch()
