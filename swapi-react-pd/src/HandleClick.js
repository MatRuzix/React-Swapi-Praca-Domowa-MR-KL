import axios from "axios";

function handleButtonClick(endpoint) {
  axios
    .get(`https://swapi.dev/api/${endpoint}`)
    .then((responde) => {
      console.log(responde.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default handleButtonClick;
