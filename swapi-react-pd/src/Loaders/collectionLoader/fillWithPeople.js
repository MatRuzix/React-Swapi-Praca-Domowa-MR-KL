import axios from "axios";

export default async function fillWithPeople(collection) {
  const newCollection = [];
  let id = 1;
  const peopleFiller = async (collection) => {
    if (!collection.next) {
      collection.results.forEach((element) => {
        const newRecord = {
          id: id,
          name: element.name,
          height: element.height,
          mass: element.mass,
          gender: element.gender,
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
          height: element.height,
          mass: element.mass,
          gender: element.gender,
          created: element.created,
          url: element.url,
        };
        id++;
        newCollection.push(newRecord);
      });
      try {
        const response = await axios.get(collection.next);
        const nextCollection = response.data;
        peopleFiller(nextCollection);
      } catch (error) {
        console.log(error.response);
      }
    }
  };
  peopleFiller(collection);
  return newCollection;
}
