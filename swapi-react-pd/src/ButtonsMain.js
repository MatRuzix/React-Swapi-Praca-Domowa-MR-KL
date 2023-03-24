import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ButtonsFromEndpoints() {
  const [endpoints, setEndpoints] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api")
      .then((response) => {
        setEndpoints(Object.keys(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {endpoints.map((endpoint, index) => {
        return <button key={index}>{endpoint}</button>;
      })}
    </>
  );
}

export default ButtonsFromEndpoints;
