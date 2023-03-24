import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import handleButtonClick from "./HandleClick";

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

  const handleClick = (endpoint) => {
    handleButtonClick(endpoint);
  };
  return (
    <>
      {endpoints.map((endpoint, index) => {
        return (
          <button key={index} onClick={() => handleClick(endpoint)}>
            {endpoint}
          </button>
        );
      })}
    </>
  );
}

export default ButtonsFromEndpoints;

// useState służy do przechowywania stanu wewnętrznego w komponencie.
// W tym przypadku używasz hooka, aby utworzyć stan endpoints, który początkowo jest ustawiony na pustą tablicę []. Wewnątrz funkcji
//
// useEffect korzystasz z biblioteki axios do wykonania żądania GET na adres URL "https://swapi.dev/api" i pobrania danych z zewnętrznego API.
//
// useEffect służy do wykonywania efektów ubocznych w komponencie, takich jak pobieranie danych z API, manipulacja DOM, czy dodanie nasłuchiwacza zdarzeń.
// W tym przypadku używasz hooka, aby wykonać żądanie GET, gdy komponent jest zamontowany, i ustawić stan endpoints na podstawie kluczy obiektu odpowiedzi.
//
// map przetwarza każdy element tablicy endpoints na przycisk. Każdy przycisk ma atrybut key ustawiony na wartość index,
// który jest indeksem bieżącego elementu w tablicy. Atrybut key jest wymagany w React przy renderowaniu list elementów.
//
// Ostatecznie, funkcja ButtonsFromEndpoints zwraca listę przycisków umieszczoną w tagach <> i </>, co jest skróconą składnią dla tagu <React.Fragment>.
// Tag <React.Fragment> jest używany, aby zwrócić wiele elementów w komponencie bez dodawania dodatkowego elementu DOM.
//  Wszystkie przyciski zostaną wyświetlone w jednym kontenerze, który jest zwracany przez tę funkcję.
//
// Jeśli chodzi o pustą tablicę [] w hooku useState, jest to początkowy stan komponentu.
// Podając pustą tablicę, inicjujesz komponent z pustą tablicą.
// Pusta tablica w hooku useEffect jako drugi argument jest wykorzystywana do ustawienia wywołania efektu tylko raz,
// gdy komponent jest zamontowany (tj. nie ma zależności, których wartości się zmieniają).
// Jeśli chcesz, aby efekt był wywoływany przy zmianie wartości określonych zależności, należy podać je jako argumenty w drugim parametrze.
// test
//
