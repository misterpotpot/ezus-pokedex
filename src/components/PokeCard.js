import React from "react";

const PokeCard = (props) => {
  const { name, imageSrc, description } = props;
  return (
    <div>
      <h2>{name}</h2>
      <img
        src={imageSrc}
        alt={"Illustration of the Pokemon " + name}
        title={name}
      />
      <p>{description}</p>
    </div>
  );
};
export default PokeCard;
