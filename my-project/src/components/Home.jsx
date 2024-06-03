import React from "react";
import RecipeList from "./RecipeList";

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to do Natural Mask Skin Care Sharing Platform</h2>
      {/* <p>Find and Share the best mask recipe</p> */}
      <RecipeList />
    </div>
  );
};

export default Home;
