const xhr = new XMLHttpRequest();
xhr.open("GET", "https://swapi.dev/api/people/1/");

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log("Response: ", JSON.parse(xhr.responseText));
  } else {
    console.log("Error: ", xhr.status);
  }
};
xhr.onerror = function () {
  console.log("onerror");
  console.log(this);
};

xhr.send();
