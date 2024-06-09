import React from "react";
import { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [resultProducts, setResultProducts] = useState([]);

  const handleInputValueChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSearchButton = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products/?title={inputValue}"
      );
      console.log(response.data);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
    setInputValue(data);
  };
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Not Ara..."
        value={inputValue}
        onChange={handleInputValueChange}
      />
      <button onClick={handleSearchButton}>Ara</button>
    </div>
  );
};

export default SearchBar;
