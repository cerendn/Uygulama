import "./App.css";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), text }]);
  };

  return (
    <div className="app">
      <div className="note-section">
        <Notes notes={notes} />
        <AddNote addNote={addNote} />
      </div>
    </div>
  );
}

export default App;
