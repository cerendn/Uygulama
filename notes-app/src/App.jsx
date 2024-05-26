import "./App.css";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), text }]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <div className="note-section">
        <Notes notes={notes} deleteNote={deleteNote} />
        <AddNote addNote={addNote} />
      </div>
    </div>
  );
}

export default App;
