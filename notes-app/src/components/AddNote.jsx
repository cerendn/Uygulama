import React from "react";
import { useState } from "react";

const AddNote = () => {
  //burada bulunan inputu takip etmek için oluşturulur
  const [note, setNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setNote("");
  };
  return (
    <div className="add-note">
      <h2>Yeni Not Ekle</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={note}
          onChange={(event) => setNote(event.target.value)}
          type="text"
          placeholder="Notunuzu buraya yazın..."
        />
        <button type="submit">Not Ekle</button>
      </form>
    </div>
  );
};

export default AddNote;
