import {
  fillWithFilms,
  fillWithPeople,
  fillWithPlanets,
  fillWithSpecies,
  fillWithStarships,
  fillWithVehicles,
} from "src/TableDataConverter";

export default function collectionLoader(
  collection,
  currentPage,
  itemsPerPage
) {
  if (collection[0].gender) {
    return fillWithPeople(collection, currentPage, itemsPerPage);
  } else if (collection[0].rotation_period) {
    return fillWithPlanets(collection, currentPage, itemsPerPage);
  } else if (collection[0].episode_id) {
    return fillWithFilms(collection);
  } else if (collection[0].average_height) {
    return fillWithSpecies(collection, currentPage, itemsPerPage);
  } else if (collection[0].hyperdrive_rating) {
    return fillWithStarships(collection, currentPage, itemsPerPage);
  } else {
    return fillWithVehicles(collection, currentPage, itemsPerPage);
  }
}
