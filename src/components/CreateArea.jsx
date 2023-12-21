import React, { useState } from 'react';

function CreateArea(props) {
  const [AreaNote1, setAreanote1] = useState('');
  const [AreaNote2, setAreanote2] = useState('');

  const handleArea1 = (event) => {
    const newvalue = event.target.value;
    //console.log('typing in create area1');
    //console.log(newvalue);
    setAreanote1(newvalue);
    //console.log(AreaNote1);
  };
  const handleArea2 = (event) => {
    const newvalue = event.target.value;
    //console.log('typing in create area 2');
    //console.log(newvalue);
    setAreanote2(newvalue);
    //console.log(AreaNote2);
  };

  const addNote = (event) => {
    console.log('clicked on add');
    const currentNewNote = { AreaNote1, AreaNote2 };
    props.onAddNote(currentNewNote);
    console.log(props.onAddNote);
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={addNote}>
        <input onChange={handleArea1} name="title" placeholder="Title" />
        <textarea
          onChange={handleArea2}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          type="submit"
          // onClick={addNote}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
