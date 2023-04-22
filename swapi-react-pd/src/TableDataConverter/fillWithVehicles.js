export default function fillWithVehicles(
  collection,
  currentPage,
  itemsPerPage
) {
  const newCollection = [];
  const firstId = itemsPerPage * currentPage - (itemsPerPage - 1);
  let id = firstId;

  collection.forEach((element, index) => {
    if (index >= firstId - 1) {
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
    }
  });
  return newCollection;
}
