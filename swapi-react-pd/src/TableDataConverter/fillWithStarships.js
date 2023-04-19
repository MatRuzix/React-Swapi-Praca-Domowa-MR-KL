export default function fillWithStarships(
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
      hyperdrive_rating: element.hyperdrive_rating,
      created: element.created,
      url: element.url,
    };
    id++;
    newCollection.push(newRecord);
  });
  return newCollection;
}
