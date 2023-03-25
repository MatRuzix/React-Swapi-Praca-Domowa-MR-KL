import axios from "axios";

const fetchData = async (URL) => {
  try {
    const response = await axios(URL);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.response);
  }
};

export default fetchData;
