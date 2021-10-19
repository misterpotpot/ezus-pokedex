import React, { useState } from "react";

const PokeList = (props) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <input type="text" value={searchValue} />
      <li>
        {props.data.map((d, i) => (
          <ul key={i}>{d.name.toUpperCase()}</ul>
        ))}
      </li>
    </div>
  );
};

export default PokeList;
