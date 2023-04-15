import ButtonsContainer from "../Components/ButtonsContainer";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Collections = () => {
  return (
    <div>
      <ButtonsContainer />
      <Outlet />
    </div>
  );
};

export default Collections;
