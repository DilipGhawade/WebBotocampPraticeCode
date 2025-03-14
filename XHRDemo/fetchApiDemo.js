// fetch("https://swapi.dev/api/people/1/").then((response) => {
//   if (response.status === 200) {
//     console.log(
//       "Response: ",
//       response.json().then((data) => console.log(data))
//     );
//   } else {
//     console.log("Error: ", response.status);
//   }
// });

const starWarPeople = async () => {
  const response = await fetch("https://swapi.dev/api/people/2/");
  const data = await response.json();
  console.log(data);
  const response2 = await fetch("https://swapi.dev/api/people/3/");
  const data2 = await response2.json();
  console.log(data2);
};

starWarPeople();
