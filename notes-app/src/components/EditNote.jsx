import React, { useState } from "react";

const EditNote = ({ updateNote, editNote }) => {
  const [text, setText] = useState(editNote.text);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateNote(editNote.id, text);
  };
  return (
    <div className="edit-note">
      <h3>Notu Düzenle</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <div className="buttons">
          <button type="submit">Kaydet</button>
          <button>İptal</button>
        </div>
      </form>
    </div>
  );
};

export default EditNote;
