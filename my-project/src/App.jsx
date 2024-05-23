import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import NewResipeForm from "./components/NewResipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <>
      <Header />
      <Home />
      <NewResipeForm />
      <RecipeList />
    </>
  );
}

export default App;
