import React from "react";

const PokeCard = (props) => {
  return (
    <div ref={props.cardRef}>
      <h2>{props.name}</h2>
      <img
        src={props.imageSrc}
        alt={"Illustration of the Pokemon " + props.name}
        title={props.name}
      />
      <p>{props.description}</p>
    </div>
  );
};
export default PokeCard;
