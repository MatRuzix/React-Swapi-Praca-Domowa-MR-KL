export default function fillWithSpecies(collection, currentPage, itemsPerPage) {
  const newCollection = [];
  const firstId = itemsPerPage * currentPage - (itemsPerPage - 1);
  let id = firstId;

  collection.forEach((element, index) => {
    if (index >= firstId - 1) {
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
    }
  });
  return newCollection;
}
