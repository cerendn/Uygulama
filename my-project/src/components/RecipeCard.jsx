import React, { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";

const RecipeCard = ({ title, description, imageUrl, id }) => {
  const [isDeletedLoading, setIsDeletedLoading] = useState(false);
  const { deleteRecipe } = useContext(ApiContext);

  return (
    <div className="recipe-card">
      <img className="recipe-image" src={imageUrl} alt={title} />
      <h4> {title} </h4>
      <p> {description} </p>
      <button
        className="btn-delete"
        //birlikte calıstıgı islemlerden ayrı calısması icin async özl ekleyip tüm btnların loading olmasını engellenir,settimeout ile de yapılabilir
        onClick={async () => {
          setIsDeletedLoading(true);
          await deleteRecipe(id);
          setIsDeletedLoading(false);
        }}
      >
        {isDeletedLoading ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};

export default RecipeCard;
