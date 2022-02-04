import React, { useState } from "react";

const PokeList = (props) => {
  const { data } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const filtredData = data.filter((d) =>
    d.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filtredData?.length
          ? filtredData.map((d, i) => <li key={i}>{d.name.toUpperCase()}</li>)
          : "Il n'y a aucun Pokemon qui correspond à cotre recherche"}
      </ul>
    </div>
  );
};

export default PokeList;
