import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import NewRecipeForm from "./components/NewRecipeForm";
import RecipeList from "./components/RecipeList";
import { useContext } from "react";
import { ThemeContex } from "./context/ThemeContext";
import { ApiContextProvider } from "./context/ApiContext";

function App() {
  const { theme } = useContext(ThemeContex);

  return (
    <>
      <div className={`app ${theme}`}>
        <Header />
        <Home />
        <ApiContextProvider>
          <NewRecipeForm />
          <RecipeList />
        </ApiContextProvider>
      </div>
    </>
  );
}

export default App;
