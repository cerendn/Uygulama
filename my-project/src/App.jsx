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
    const getRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/recipes");
        setFaceRecipes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getRecipes();
  }, []);
  //func burda tanımlanmasının nedeni statelerin burda olması
  const addRecipeToList = async (title, description, imageUrl) => {
    const newRecipe = { title, description, imageUrl };
    try {
      const response = await axios.post(
        "http://localhost:3000/recipes",
        newRecipe
      );
      if (response.status === 201) {
        setFaceRecipes((prevRecipes) => [...prevRecipes, response.data]);
      }
    } catch (error) {
      console.error("Maske ekleme hatası:", error);
    }
  };

  return (
    <>
      <Header />
      <Home />
      <NewRecipeForm addRecipeToList={addRecipeToList} />
      <RecipeList faceRecipes={faceRecipes} />
    </>
  );
}

export default App;
