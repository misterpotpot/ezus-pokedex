import React, { useState, useEffect } from "react";
import PokeCard from "./components/PokeCard";
import PokeList from "./components/PokeList";

const App = (props) => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=1138";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setListData(json.results));
  }, []);

  return (
    <>
      <h1>Pokedex</h1>
      <PokeList data={listData} />
      <PokeCard data={{}} />
    </>
  );
};

export default App;
