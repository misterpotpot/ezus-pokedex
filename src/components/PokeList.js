import React, { useState } from "react";

const PokeList = (props) => {
  const { data } = props;
  return (
    <div>
      <input type="text" />
      <li>
        {data.map((d, i) => (
          <ul key={i}>{d.name.toUpperCase()}</ul>
        ))}
      </li>
    </div>
  );
};

export default PokeList;
