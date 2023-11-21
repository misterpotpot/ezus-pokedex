import React, { useState } from "react";
const PokeList = (props) => {
    const { data, onSearch } = props;
    const [searchValue, setSearchValue] = useState("");

    const handlePokemonClick = (pokemonName) => {
        setSearchValue("");
        onSearch(pokemonName);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="What Pokemon are you looking for ?"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <ul>
                {data
                    .filter((ret) =>
                        ret.name.toUpperCase().includes(searchValue.toUpperCase())
                    )
                    .map((d, i) => (
                        <li key={i} onClick={() => handlePokemonClick(d.name)}>
                            {d.name.toLowerCase()}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default PokeList;
