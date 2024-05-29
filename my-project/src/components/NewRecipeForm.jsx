import React, { useState } from "react";

const NewRecipeForm = ({ addRecipeToList, isLoading }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [titleErr, setTitleErr] = useState(false);
  const [descriptionErr, setDescritionErr] = useState(false);
  const [imageErr, setImageErr] = useState(false);

  //sayfanın yeniden refresh edilmesi engeller ve inputları temizler
  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() && description.trim() && imageUrl.trim()) {
      addRecipeToList(title, description, imageUrl);
      setTitle("");
      setDescription("");
      setImageUrl("");
    } else {
      !title.trim() && setTitleErr(true);
      !description.trim() && setDescritionErr(true);
      !imageUrl.trim() && setImageErr(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          placeholder="Mask Recipe Title"
          onChange={(event) => setTitle(event.target.value)}
        />
        {titleErr && <p>Title can not be empty!</p>}
        <textarea
          value={description}
          placeholder="Mask Resipe Description"
          onChange={(event) => setDescription(event.target.value)}
        />
        {descriptionErr && <p>Title can not be empty!</p>}
        <input
          value={imageUrl}
          type="text"
          placeholder="image Url"
          onChange={(event) => setImageUrl(event.target.value)}
        />
        {imageErr && <p>Title can not be empty!</p>}
        <button type="submit">
          {isLoading.add ? "Loading..." : "Add Mask"}
        </button>
      </form>
    </div>
  );
};

export default NewRecipeForm;
