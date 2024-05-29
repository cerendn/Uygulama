import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import NewRecipeForm from "./components/NewRecipeForm";
import RecipeList from "./components/RecipeList";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [faceRecipes, setFaceRecipes] = useState([]);
  const [isLoading, setisLoading] = useState({
    read: false,
    delete: false,
    add: false,
  });

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
    setisLoading((prevIsLoading) => ({ ...prevIsLoading, add: true }));
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
    setisLoading((prevIsLoading) => ({ ...prevIsLoading, add: false }));
  };

  const deleteRecipe = async (id) => {
    setisLoading((prevIsLoading) => ({ ...prevIsLoading, delete: true }));
    const response = await axios.delete(`http://localhost:3000/recipes/${id}`);
    if (response.status === 200) {
      setFaceRecipes((prevRecipeList) =>
        prevRecipeList.filter((recipe) => recipe.id !== id)
      );
    }
    setisLoading((prevIsLoading) => ({ ...prevIsLoading, delete: false }));
  };

  return (
    <>
      <Header />
      <Home />
      <NewRecipeForm addRecipeToList={addRecipeToList} isLoading={isLoading} />
      <RecipeList
        faceRecipes={faceRecipes}
        deleteRecipe={deleteRecipe}
        isLoading={isLoading}
      />
    </>
  );
}

export default App;
