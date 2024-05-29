import RecipeCard from "./RecipeCard";

const RecipeList = ({ faceRecipes, deleteRecipe, isLoading }) => {
  return (
    <div className="recipe-list">
      {faceRecipes.map((faceResipe) => (
        <RecipeCard
          key={faceResipe.id}
          deleteRecipe={deleteRecipe}
          {...faceResipe}
        />
      ))}
    </div>
  );
};

export default RecipeList;
