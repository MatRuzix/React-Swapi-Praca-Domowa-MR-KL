import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RootLayout from "./Layouts/RootLayout";
import Collections from "./Pages/Collections";
import CollectionTable from "./Pages/CollectionTable";
import { useEffect, useState } from "react";
import axios from "axios";

const BaseUrl = process.env.REACT_APP_BASE_URL;

function App() {
  const [fetchedData, setFetchedData] = useState([]);
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
    fetchData(BaseUrl);
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="collections" element={<Collections />}>
          {Object.entries(fetchedData).map(([key, value]) => (
            <Route
              path={key}
              element={<CollectionTable />}
              loader={() => {
                return collectionLoader(value);
              }}
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

const collectionLoader = async (URL) => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
