import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import NewRecipeForm from "./components/NewRecipeForm";
import RecipeList from "./components/RecipeList";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [faceRecipes, setFaceRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/recipes")
      .then((response) => setFaceRecipes(response.data))
      .catch((error) => {
        console.log("veri alınma hatası:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <Home />
      <NewRecipeForm />
      <RecipeList faceRecipes={faceRecipes} />
    </>
  );
}

export default App;
