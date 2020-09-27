const getUser = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/3");
    if (!res.ok) {
      throw new Error(res.status);
    }
    const data = await res.json();
    console.log(`${data.name} works for ${data.company.name}`);
  } catch (err) {
    console.error(err);
  }
};
getUser();
// fetch("https://jsonplaceholder.typicode.com/users/3")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   })
//   .then((person) =>
//     console.log(`${person.name} works for ${person.company.name}`)
//   )
//   .catch((err) => console.error(err));
