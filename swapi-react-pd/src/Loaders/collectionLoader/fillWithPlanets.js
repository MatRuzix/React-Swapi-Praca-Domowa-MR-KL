import axios from "axios";

export default async function fillWithPlanets(collection) {
  const newCollection = [];
  let id = 1;
  const planetsFiller = async (collection) => {
    if (!collection.next) {
      collection.results.forEach((element) => {
        const newRecord = {
          id: id,
          name: element.name,
          rotation_period: element.rotation_period,
          orbital_period: element.orbital_period,
          diameter: element.diameter,
          climate: element.climate,
          created: element.created,
          url: element.url,
        };
        id++;
        newCollection.push(newRecord);
      });
    } else {
      collection.results.forEach((element) => {
        const newRecord = {
          id: id,
          name: element.name,
          rotation_period: element.rotation_period,
          orbital_period: element.orbital_period,
          diameter: element.diameter,
          climate: element.climate,
          created: element.created,
          url: element.url,
        };
        id++;
        newCollection.push(newRecord);
      });
      try {
        const response = await axios.get(collection.next);
        const nextCollection = response.data;
        planetsFiller(nextCollection);
      } catch (error) {
        console.log(error.response);
      }
    }
  };
  planetsFiller(collection);
  return newCollection;
}
