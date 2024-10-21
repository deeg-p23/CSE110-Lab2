import './App.css';
import { Label, Note } from "./types"; // Import the Label type from the appropriate module
import { dummyNotesList } from "./constants"; // Import the dummyNotesList from the appropriate module
import { useState, useEffect } from "react"

function deleteNote(note: Note, note_list: typeof dummyNotesList) {
  var new_notes = note_list.filter((given) => given.id != note.id)
  return new_notes
}

export const StickyNotes = () => {
  const [notes, setNotes] = useState(dummyNotesList); 
  const [favorites, setFavorites] = useState<string[]>([]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const initialNote = {
     id: -1,
     title: "",
     content: "",
     label: Label.other,
   };
  const [createNote, setCreateNote] = useState(initialNote);
  
  const createNoteHandler = (event: React.FormEvent) => {
     event.preventDefault();
     console.log("title: ", createNote.title);
     console.log("content: ", createNote.content);
     createNote.id = notes.length + 1;
     setNotes([createNote, ...notes]);
     setCreateNote(initialNote);
   };

  const toggleFavorite = (note: Note) => {
    if (favorites.includes(note.title)) {
      setFavorites(favorites.filter((title) => title != note.title));
    } else {
      setFavorites([...favorites, note.title]);
    }
    }
  
  useEffect(() => {
    console.log("Favorites updated:", favorites);
  }, [favorites]);

 return (

   <div className={'app-container'}>

    
     <form className="note-form" onSubmit={createNoteHandler}>
       <div>
       <input
        	placeholder="Note Title"
          value={createNote.title}
        	onChange={(event) =>
          	setCreateNote({ ...createNote, title: event.target.value })}
        	required
        />
        
       </div>

       <div>
        <textarea
          placeholder = "Note Content"
          value = {createNote.content}
          onChange = {(event) =>
            setCreateNote({...createNote, content: event.target.value})
          }
          required
        />
      </div>

      <div>
     	<select
       	onChange={(event) =>
         	setCreateNote({ ...createNote, label: Label[event.target.value as keyof typeof Label]})}
       	required>
       	<option value={Label.personal}>Personal</option>
       	<option value={Label.study}>Study</option>
       	<option value={Label.work}>Work</option>
       	<option value={Label.other}>Other</option>
     	</select>
   	</div>

      <div className="submitButton">
        <button type="submit">Create Note</button>
      </div>
     </form>

     <div className="notes-grid">
    	{notes.map((note) => (
      	<div key={note.id} className="note-item">
        	<div className="notes-header">
          	<button onClick={() => toggleFavorite(note)}>
              {favorites.includes(note.title) ? "❤️" : "♡"}
            </button>
            <button onClick={() => setNotes(deleteNote(note, notes))}>x</button>
        	</div>
        	<h2> {note.title} </h2>
        	<p> {note.content} </p>
        	<p> {note.label} </p>
      	</div>
    	))}
  	</div>
    <div className="faovirtes-list">
      <h3>List of Favorites:</h3>
        <ul>
          {favorites.map((title, index) => (
            <li key={index}>{title}</li>
          ))}
        </ul>
    </div>
	</div>
 );
}

export default StickyNotes;