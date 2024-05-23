import React, { useState } from "react";

const NewResipeForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle("");
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
        <textarea placeholder="Mask Resipe Description" required />
        <input type="text" placeholder="image Url" required />
        <button type="submit">Add Mask</button>
      </form>
    </div>
  );
};

export default NewResipeForm;
