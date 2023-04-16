import { useQuery } from "@tanstack/react-query";
import fetchCollectionData from "../Fetching/fetchCollectionData";
import collectionLoader from "../TableDataConverter/collectionLoader";
import { useState, useEffect } from "react";

export default function CollectionTable({ queryKey, URL, itemsPerPage }) {
  const { data } = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchCollectionData(URL, itemsPerPage),
  });
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    if (data) {
      setCollection(collectionLoader(data));
    }
  }, [data]);

  console.log(collection);
  return (
    <div>
      {collection.map((element) => (
        <p>{JSON.stringify(element)}</p>
      ))}
    </div>
  );
}
