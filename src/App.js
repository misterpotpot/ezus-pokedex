import PokeList from "./components/PokeList";
import PokeCard from "./components/PokeCard";
import React, { useState, useEffect } from 'react';

const App = (props) => {
    const [listData, setListData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [selectedPokemon, setSelectedPokemon] = useState("");

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=1138";
        fetch(url)
            .then((response) => response.json())
            .then((json) => setListData(json.results));
    }, []);

    const handleSearch = (pokemonName) => {
        setSelectedPokemon(pokemonName);
    };

    return (
        <>
            <h1>Pokedex</h1>
            <PokeList data={listData} onSearch={handleSearch} />
            <PokeCard
                name={selectedPokemon}
                imageSrc={""}
                description={""}
            />
        </>
    );
};

export default App;
