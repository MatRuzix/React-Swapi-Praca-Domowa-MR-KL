export default function fillWithSpecies(collection, currentPage, itemsPerPage) {
  const newCollection = [];
  let id = itemsPerPage * currentPage - (itemsPerPage - 1);

  collection.forEach((element) => {
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
  return newCollection;
}
