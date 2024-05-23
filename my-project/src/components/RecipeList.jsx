import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ faceRecipes }) => {
  return (
    <div>
      {faceRecipes.map((faceResipe) => (
        <RecipeCard key={faceResipe.id} {...faceResipe} />
      ))}
    </div>
  );
};

export default RecipeList;
