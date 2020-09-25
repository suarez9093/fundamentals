let geolocation = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      resolve(position);
    },
    (error) => reject(error)
  );
});

geolocation
  .then((res) => console.log("res", res))
  .catch((err) => console.error(err))
  .finally(console.log("Promise executed"));
