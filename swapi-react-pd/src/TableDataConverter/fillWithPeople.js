export default function fillWithPeople(collection, amount) {
  const newCollection = [];
  let id = 1;

  collection.forEach((element) => {
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
  return newCollection;
}
