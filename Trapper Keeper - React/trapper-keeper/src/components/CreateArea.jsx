import React, { useState } from "react";
import Title from "./Title";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [rowSize, setRowSize] = useState(1);

  const [focus, setFocus] = useState(false);

  function giveFocus() {
    setFocus(true);
    setRowSize(3);
  }

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {focus === true ? (
          <Title
            focus={focus}
            title={note.title}
            rowHeight={rowSize}
            change={handleChange}
          />
        ) : null}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          onClick={giveFocus}
          rows={rowSize}
        />
        <Zoom in={focus === true ? true : false}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
