import axios from "axios";

const baseURL = "https://swapi.dev/api";

const fetchCollectionData = async (collectionName) => {
  let response = await axios.get(`${baseURL}/${collectionName}`);
  console.log(response.data);
  let newData = response.data.results;
  let nextPage = response.data.next;

  while (nextPage !== null) {
    console.log("bob");
    response = await axios.get(nextPage);
    console.log(response);
    newData = newData.concat(response.data.results);
    nextPage = response.data.next;
  }

  return newData;
};

export default fetchCollectionData;
