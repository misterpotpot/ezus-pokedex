import React, { useState, useEffect } from "react";

const PokeList = (props) => {
  const { data } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [orderMode, setOrderMode] = useState(0);
  const [filtredData, setFiltredData] = useState([]);

  useEffect(() => {
    setFiltredData(
      data
        .filter((d) => d.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) =>
          orderMode === 1
            ? a.name.toLowerCase() - b.name.toLowerCase()
            : orderMode === -1
            ? b.name.toLowerCase() - a.name.toLowerCase()
            : 0
        )
    );
  }, [data, searchTerm, orderMode]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setOrderMode(orderMode >= 1 ? -1 : orderMode + 1)}
        >
          {orderMode === 1 ? "Tri AZ" : orderMode === -1 ? "Tri ZA" : "Tri"}
        </button>
      </div>
      <ul>
        {filtredData?.length
          ? filtredData.map((d, i) => <li key={i}>{d.name.toUpperCase()}</li>)
          : "Il n'y a aucun Pokemon qui correspond à cotre recherche"}
      </ul>
    </div>
  );
};

export default PokeList;
