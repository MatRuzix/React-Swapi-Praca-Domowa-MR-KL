import { useQuery } from "@tanstack/react-query";
import fetchCollectionData from "../Fetching/fetchCollectionData";

export default function CollectionTable({ queryKey, URL, itemsPerPage }) {
  const collection = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchCollectionData(URL, itemsPerPage),
  });

  return <div>CollectionTable</div>;
}
