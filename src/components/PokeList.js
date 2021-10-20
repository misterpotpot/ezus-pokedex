import React from "react";

const PokeList = (props) => {
  const { data } = props;
  return (
    <div>
      <input type="text" />
      <ul>
        {data.map((d, i) => (
          <li key={i}>{d.name.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokeList;
