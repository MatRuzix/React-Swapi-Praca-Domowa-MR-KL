import { useQuery } from "@tanstack/react-query";
import fetchCollectionData from "../Fetching/fetchCollectionData";
import collectionLoader from "../TableDataConverter/collectionLoader";
import ItemsPerPageSelect from "src/Components/ItemsPerPageSelect";
import { useState, useEffect } from "react";

export default function CollectionTable({ queryKey }) {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchCollectionData(queryKey),
    staleTime: 1000000,
  });
  const query = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchCollectionData(queryKey),
    staleTime: 1000000,
  });
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    if (data) {
      setCollection(collectionLoader(data, currentPage, itemsPerPage));
    }
  }, [data, currentPage, itemsPerPage]);

  if (query.isFetching) {
    return <h1>Loading...</h1>;
  }

  if (query.isError) {
    return <h2>{JSON.stringify(query.error)}</h2>;
  }
  return (
    <div>
      <ItemsPerPageSelect
        itemsPerPage={itemsPerPage}
        itemsPerPageSetter={setItemsPerPage}
      />
      <button
        onClick={() => {
          setCurrentPage((prev) => prev + 1);
        }}
      >
        next
      </button>
      <button
        onClick={() => {
          setCurrentPage((prev) => prev - 1);
        }}
      >
        previous
      </button>
      {collection.map((element, index) => {
        if (index < itemsPerPage) {
          return <p key={element.name}>{JSON.stringify(element)}</p>;
        }
      })}
    </div>
  );
}
