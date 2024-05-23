import React from "react";

const RecipeCard = ({ title, description, image }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h4> {title} </h4>
      <p> {description} </p>
    </div>
  );
};

export default RecipeCard;
