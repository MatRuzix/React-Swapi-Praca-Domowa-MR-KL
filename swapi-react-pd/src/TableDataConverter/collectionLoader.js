import {
  fillWithFilms,
  fillWithPeople,
  fillWithPlanets,
  fillWithSpecies,
  fillWithStarships,
  fillWithVehicles,
} from "src/TableDataConverter";

export default function collectionLoader(collection) {
  console.log(collection);
  if (collection[0].gender) {
    return fillWithPeople(collection);
  } else if (collection[0].rotation_period) {
    return fillWithPlanets(collection);
  } else if (collection[0].episode_id) {
    return fillWithFilms(collection);
  } else if (collection[0].average_height) {
    return fillWithSpecies(collection);
  } else if (collection[0].hyperdrive_rating) {
    return fillWithStarships(collection);
  } else {
    return fillWithVehicles(collection);
  }
}
