import axios from "axios";
import {
  fillWithFilms,
  fillWithPeople,
  fillWithPlanets,
  fillWithSpecies,
  fillWithStarships,
  fillWithVehicles,
} from "src/Loaders/collectionLoader";

export default async function collectionLoader(URL) {
  try {
    const response = await axios.get(URL);
    const data = response.data;

    if (data.results[0].gender) {
      const result = fillWithPeople(data);
      return result;
    } else if (data.results[0].rotation_period) {
      const result = fillWithPlanets(data);
      return result;
    } else if (data.results[0].episode_id) {
      const result = fillWithFilms(data);
      return result;
    } else if (data.results[0].average_height) {
      const result = fillWithSpecies(data);
      return result;
    } else if (data.results[0].hyperdrive_rating) {
      const result = fillWithStarships(data);
      return result;
    } else {
      const result = fillWithVehicles(data);
      return result;
    }
  } catch (error) {
    console.log(error.response);
  }
}
