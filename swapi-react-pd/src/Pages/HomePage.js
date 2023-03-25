import ButtonContainer from "../Components/ButtonContainer";
import { useState } from "react";

function HomePage() {
  const [collectionData, setCollectionData] = useState([]);
  return (
    <div className="HomePage">
      <ButtonContainer dataContainerSetter={setCollectionData} />
    </div>
  );
}

export default HomePage;
