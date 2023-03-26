import ButtonsContainer from "../Components/ButtonsContainer";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Collections = () => {
  const [collectionData, setCollectionData] = useState([]);

  return (
    <div>
      <ButtonsContainer dataContainerSetter={setCollectionData} />

      <Outlet context={collectionData} />
    </div>
  );
};

export default Collections;
