import axios from "axios";

const fetchCollectionData = async (URL, itemsPerPage) => {
  let response = await axios.get(URL);
  let newData = response.data.results;
  let nextPage = response.data.next;

  while (newData.length < itemsPerPage && nextPage !== null) {
    response = await axios.get(nextPage);
    console.log(response);
    newData = newData.concat(response.data.results);
    nextPage = response.data.next;
  }

  return newData;
};

export default fetchCollectionData;
