export default function fillWithPlanets(collection, currentPage, itemsPerPage) {
  const newCollection = [];
  const firstId = itemsPerPage * currentPage - (itemsPerPage - 1);
  let id = firstId;

  collection.forEach((element, index) => {
    if (index >= firstId - 1) {
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
    }
  });
  return newCollection;
}
