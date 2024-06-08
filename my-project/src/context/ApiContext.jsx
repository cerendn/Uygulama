import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AuthService from "../services/AuthServise";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
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

  const addRecipeToList = async (title, description, imageUrl) => {
    const newRecipe = { title, description, imageUrl };
    setisLoading((prevIsLoading) => ({ ...prevIsLoading, add: true }));
    const user = AuthService.getCurrentUser();
    const token = user?.token;
    try {
      const response = await axios.post(
        "http://localhost:3000/recipes",
        newRecipe,
        {
          Authorization: `Bearer ${token}`,
        }
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
    <ApiContext.Provider
      value={{ faceRecipes, isLoading, addRecipeToList, deleteRecipe }}
    >
      {children}
    </ApiContext.Provider>
  );
};
