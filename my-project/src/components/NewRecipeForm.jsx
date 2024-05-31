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
      <form className="new-recipe-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            value={title}
            type="text"
            placeholder="Mask Recipe Title"
            onChange={(event) => setTitle(event.target.value)}
          />
          {titleErr && (
            <p
              className="input-err
          "
            >
              Title can not be empty!
            </p>
          )}
        </div>
        <div className="form-control">
          <textarea
            value={description}
            placeholder="Mask Resipe Description"
            onChange={(event) => setDescription(event.target.value)}
          />
          {descriptionErr && (
            <p
              className="input-err
          "
            >
              Title can not be empty!
            </p>
          )}
        </div>
        <div className="form-control">
          <input
            value={imageUrl}
            type="text"
            placeholder="image Url"
            onChange={(event) => setImageUrl(event.target.value)}
          />
          {imageErr && (
            <p
              className="input-err
          "
            >
              Title can not be empty!
            </p>
          )}
        </div>
        <button className="btn-submit" type="submit">
          {isLoading.add ? "Loading..." : "Add Mask"}
        </button>
      </form>
    </div>
  );
};

export default NewRecipeForm;
