import axios from "axios";

export default async function fillWithSpecies(collection) {
  const newCollection = [];
  let id = 1;
  const speciesFiller = async (collection) => {
    if (!collection.next) {
      collection.results.forEach((element) => {
        const newRecord = {
          id: id,
          name: element.name,
          classification: element.classification,
          designation: element.designation,
          average_height: element.average_height,
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
          classification: element.classification,
          designation: element.designation,
          average_height: element.average_height,
          created: element.created,
          url: element.url,
        };
        id++;
        newCollection.push(newRecord);
      });
      try {
        const response = await axios.get(collection.next);
        const nextCollection = response.data;
        speciesFiller(nextCollection);
      } catch (error) {
        console.log(error.response);
      }
    }
  };
  speciesFiller(collection);
  return newCollection;
}
