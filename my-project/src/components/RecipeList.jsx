import { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { ApiContext } from "../context/ApiContext";

const RecipeList = () => {
  const { faceRecipes } = useContext(ApiContext);
  return (
    <div className="recipe-list">
      {faceRecipes.map((faceResipe) => (
        <RecipeCard key={faceResipe.id} {...faceResipe} />
      ))}
    </div>
  );
};

export default RecipeList;
