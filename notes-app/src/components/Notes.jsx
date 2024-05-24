import React from "react";

const Notes = ({ notes }) => {
  return (
    <div className="notes">
      <h2>Notlarım</h2>
      {notes.map((note) => (
        <div className="note">
          <p> {note} </p>
          <div className="buttons">
            <button>Düzenle</button>
            <button>Sil</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notes;
