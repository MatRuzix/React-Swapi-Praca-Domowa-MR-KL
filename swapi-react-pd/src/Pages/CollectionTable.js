import { useQuery } from "@tanstack/react-query";
import fetchCollectionData from "../Fetching/fetchCollectionData";
import collectionLoader from "../TableDataConverter/collectionLoader";
import ItemsPerPageSelect from "src/Components/ItemsPerPageSelect";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import dateCorrect from "src/Data Transformation/dateCorrect";
import { Table } from "semantic-ui-react";

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
      <Button
        onClick={() => {
          setCurrentPage((prev) => prev + 1);
        }}
        variant="contained"
        disabled={data.length < currentPage * itemsPerPage ? true : false}
      >
        next
      </Button>
      <Button
        onClick={() => {
          setCurrentPage((prev) => prev - 1);
        }}
        variant="contained"
        disabled={currentPage === 1 ? true : false}
      >
        previous
      </Button>
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              {collection.length > 0 &&
                Object.keys(collection[0]).map((key) => {
                  if (key !== "url") {
                    return <Table.HeaderCell key={key}>{key}</Table.HeaderCell>;
                  }
                })}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {collection.map((element, index) => {
              if (index < itemsPerPage) {
                return (
                  <Table.Row>
                    {Object.entries(element).map(([key, value]) => {
                      if (key === "created") {
                        return (
                          <Table.Cell key={key}>
                            {dateCorrect(value)}
                          </Table.Cell>
                        );
                      }
                      if (key !== "url") {
                        return <Table.Cell>{value}</Table.Cell>;
                      }
                    })}
                  </Table.Row>
                );
              }
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
