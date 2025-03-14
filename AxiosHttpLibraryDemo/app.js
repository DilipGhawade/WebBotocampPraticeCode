axios.get("https://swapi.dev/api/people/1/").then((response) => {
  console.log("Response: ", response);
});

const jokeUl = document.getElementById("jokes");

const button = document.querySelector("#btnJokeId");
const addNewJoke = async () => {
  const result = await getJoke();
  const newLi = document.createElement("LI");
  newLi.append(result);
  jokeUl.append(newLi);
};
const getJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const response = await axios.get("https://icanhazdadjoke.com/", config);
  const result = response.data.joke;

  //   console.log(result);
  return result;
};
button.addEventListener("click", addNewJoke);
