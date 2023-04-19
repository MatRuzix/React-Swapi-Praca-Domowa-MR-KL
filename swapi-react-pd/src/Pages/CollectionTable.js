import { useQuery } from "@tanstack/react-query";
import fetchCollectionData from "../Fetching/fetchCollectionData";
import collectionLoader from "../TableDataConverter/collectionLoader";
import { useState, useEffect } from "react";

export default function CollectionTable({
  queryKey,
  URL,
  itemsPerPage,
  startingPage,
  currentPage,
}) {
  console.log(startingPage);
  const { data } = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchCollectionData(queryKey, itemsPerPage, startingPage),
  });
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    if (data) {
      setCollection(collectionLoader(data, currentPage, itemsPerPage));
    }
  }, [data]);

  console.log(collection);
  return (
    <div>
      {collection.map((element, index) => (
        <p>{JSON.stringify(element)}</p>
      ))}
    </div>
  );
}
