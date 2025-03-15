const form = document.querySelector("#tvshowSearchForm");
const resultContainer = document.querySelector("#container");

form.addEventListener("submit", async function (ele) {
  ele.preventDefault();
  const term = form.elements.query.value;
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${term}`
  );
  console.log("Response: ", response.data);
  makeImages(response.data);
});

const makeImages = (shows) => {
  console.log("Shows", shows);

  for (let result of shows) {
    const image = document.createElement("IMG");
    image.src = result.show.image.medium;
    resultContainer.append(image);
    const title = document.createElement("H1");
    title.append(result.show.name);
    resultContainer.append(title);
  }
};
