export default function fillWithVehicles(
  collection,
  currentPage,
  itemsPerPage
) {
  const newCollection = [];
  let id = itemsPerPage * currentPage - (itemsPerPage - 1);

  collection.forEach((element) => {
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
  return newCollection;
}
