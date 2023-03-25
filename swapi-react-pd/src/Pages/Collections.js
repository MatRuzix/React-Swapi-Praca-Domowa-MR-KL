import ButtonsContainer from "../Components/ButtonsContainer";
import { useState } from "react";

const Collections = () => {
  const [collectionData, setCollectionData] = useState([]);

  return (
    <div>
      <ButtonsContainer dataContainerSetter={setCollectionData} />
    </div>
  );
};

export default Collections;
