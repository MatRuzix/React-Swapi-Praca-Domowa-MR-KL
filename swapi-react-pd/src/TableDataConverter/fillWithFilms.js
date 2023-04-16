export default function fillWithFilms(collection) {
  const newCollection = [];
  let id = 1;

  collection.forEach((element) => {
    const newRecord = {
      id: id,
      title: element.title,
      episode_id: element.episode_id,
      release_date: element.release_date,
      gender: element.gender,
      created: element.created,
      url: element.url,
    };
    id++;
    newCollection.push(newRecord);
  });
  return newCollection;
}
