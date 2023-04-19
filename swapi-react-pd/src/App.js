import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RootLayout from "./Layouts/RootLayout";
import CollectionTable from "./Pages/CollectionTable";
import Collections from "./Pages/Collections";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://swapi.dev/api";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [startingPage, setStartingPage] = useState(
    Math.floor(currentPage * (itemsPerPage / 10) - (itemsPerPage / 10 - 1))
  );

  useEffect(() => {
    const fetchData = async (URL) => {
      try {
        const response = await axios.get(URL);
        const data = response.data;
        setFetchedData(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData(baseUrl);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="collections" element={<Collections />}>
          {Object.entries(fetchedData).map(([key, value]) => (
            <Route
              path={key}
              element={
                <CollectionTable
                  queryKey={key}
                  URL={value}
                  itemsPerPage={itemsPerPage}
                  startingPage={startingPage}
                  currentPage={currentPage}
                />
              }
              key={key}
            />
          ))}
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
