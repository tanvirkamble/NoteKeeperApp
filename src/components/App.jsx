import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Note from './note';
import CreateArea from './CreateArea';

function App() {
  const [NoteContent, setNoteContent] = useState([]);

  const addnewNote = (x) => {
    setNoteContent((prev) => [...prev, x]);
  };

  const deletenote = (x) => {
    // console.log('delete');
    // console.log('delete note ' + x);
    setNoteContent((prev) => {
      return prev.filter((y, index) => {
        // console.log('filter func');
        // console.log(x);
        return index !== x;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAddNote={addnewNote} />
      {NoteContent.map((x, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={x.AreaNote1}
            content={x.AreaNote2}
            deleteNote={deletenote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
