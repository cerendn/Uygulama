import React, { useState } from "react";

const RecipeCard = ({ title, description, imageUrl, deleteRecipe, id }) => {
  const [isDeletedLoading, setIsDeletedLoading] = useState(false);
  return (
    <div className="recipe-card">
      <img src={imageUrl} alt={title} />
      <h4> {title} </h4>
      <p> {description} </p>
      <button
        onClick={() => {
          setIsDeletedLoading(true);
          deleteRecipe(id);
          setIsDeletedLoading(false);
        }}
      >
        {isDeletedLoading ? "Deleting..." : "Deleted"}
      </button>
    </div>
  );
};

export default RecipeCard;
