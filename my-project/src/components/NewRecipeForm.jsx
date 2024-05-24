import React, { useState } from "react";
import axios from "axios";

const NewRecipeForm = ({ addRecipeToList }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  //sayfanın yeniden refresh edilmesi engeller ve inputları temizler
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/recipes", { title, description, imageUrl })
      .then((response) => {
        console.log(response.data);
        addRecipeToList(response.data);
      })
      .catch((error) => {
        console.error("new recipe error:", error);
      });

    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          placeholder="Mask Recipe Title"
          required
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          value={description}
          placeholder="Mask Resipe Description"
          required
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          value={imageUrl}
          type="text"
          placeholder="image Url"
          required
          onChange={(event) => setImageUrl(event.target.value)}
        />
        <button type="submit">Add Mask</button>
      </form>
    </div>
  );
};

export default NewRecipeForm;
