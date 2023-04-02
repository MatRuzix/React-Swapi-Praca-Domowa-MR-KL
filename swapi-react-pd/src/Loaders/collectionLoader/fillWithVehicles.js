import axios from "axios";

export default async function fillWithVehicles(collection) {
  const newCollection = [];
  let id = 1;
  const vehiclesFiller = async (collection) => {
    if (!collection.next) {
      collection.results.forEach((element) => {
        const newRecord = {
          id: id,
          name: element.name,
          model: element.model,
          manufacturer: element.manufacturer,
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
          created: element.created,
          url: element.url,
        };
        id++;
        newCollection.push(newRecord);
      });
      try {
        const response = await axios.get(collection.next);
        const nextCollection = response.data;
        vehiclesFiller(nextCollection);
      } catch (error) {
        console.log(error.response);
      }
    }
  };
  vehiclesFiller(collection);
  return newCollection;
}
