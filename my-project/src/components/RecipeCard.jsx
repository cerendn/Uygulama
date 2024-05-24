import React from "react";

const RecipeCard = ({ title, description, imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <h4> {title} </h4>
      <p> {description} </p>
    </div>
  );
};

export default RecipeCard;
