import React from "react";

const Notes = ({ notes, deleteNote }) => {
  return (
    <div className="notes">
      <h2>Notlarım</h2>
      {notes.map((note) => (
        <div className="note" key={note.id}>
          <p> {note.text} </p>
          <div className="buttons">
            <button>Düzenle</button>
            <button onClick={() => deleteNote(note.id)}>Sil</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notes;