import axios from "axios";

export default async function fillWithStarships(collection) {
  const newCollection = [];
  let id = 1;
  const starshipsFiller = async (collection) => {
    if (!collection.next) {
      collection.results.forEach((element) => {
        const newRecord = {
          id: id,
          name: element.name,
          model: element.model,
          manufacturer: element.manufacturer,
          hyperdrive_rating: element.hyperdrive_rating,
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
          model: element.model,
          manufacturer: element.manufacturer,
          hyperdrive_rating: element.hyperdrive_rating,
          created: element.created,
          url: element.url,
        };
        id++;
        newCollection.push(newRecord);
      });
      try {
        const response = await axios.get(collection.next);
        const nextCollection = response.data;
        starshipsFiller(nextCollection);
      } catch (error) {
        console.log(error.response);
      }
    }
  };
  starshipsFiller(collection);
  return newCollection;
}
