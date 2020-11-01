let requestURL =
  "https://opendata.hauts-de-seine.fr/explore/dataset/fr-219200714-localisation-des-defibrillateurs/api/";

// console.log(promise);

fetch(requestURL, {
  headers: {
    // remove all those random headers you added
    "api-key": requestURL,
  },
  mode: "cors", // add this
})
  .then((response) => response.json())
  .then(function (myJson) {
    console.log(JSON.stringify(myJson));
  })
  .catch((error) => console.error(error));
