import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import NewRecipeForm from "./components/NewRecipeForm";
import { useContext } from "react";
import { ThemeContex } from "./context/ThemeContext";
import { ApiContextProvider } from "./context/ApiContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const { theme } = useContext(ThemeContex);

  return (
    <>
      <AuthProvider>
        <Router>
          <div className={`app ${theme}`}>
            <Header />
            <ApiContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-recipe" element={<NewRecipeForm />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </ApiContextProvider>
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
