import React, { useState } from "react";

const NewResipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
          placeholder="Mask Resipe Description"
          required
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
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

export default NewResipeForm;
