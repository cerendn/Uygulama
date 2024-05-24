import "./App.css";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState(["not1", "not2"]);

  return (
    <div className="app">
      <h1>Notes App</h1>
      <div className="note-section">
        <Notes notes={notes} />
        <AddNote />
      </div>
    </div>
  );
}

export default App;
