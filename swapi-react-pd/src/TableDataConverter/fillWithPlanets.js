export default function fillWithPlanets(collection) {
  const newCollection = [];
  let id = 1;

  collection.forEach((element) => {
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
  return newCollection;
}
