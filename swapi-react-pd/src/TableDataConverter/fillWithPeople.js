export default function fillWithPeople(collection, currentPage, itemsPerPage) {
  const newCollection = [];
  const firstId = itemsPerPage * currentPage - (itemsPerPage - 1);
  let id = firstId;

  collection.forEach((element, index) => {
    if (index >= firstId - 1) {
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
    }
  });
  return newCollection;
}
