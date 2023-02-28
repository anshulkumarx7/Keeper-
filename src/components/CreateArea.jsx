import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isExpanded,setExpanded]=useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    props.toadd(note);
    setNote({
      title: "",
      content: "",
    });
    setExpanded(false);
    event.preventDefault();
  }
  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form>
      {isExpanded && 
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3:1}

          value={note.content}
        />
        {isExpanded &&
        <button onClick={handleClick}>
          <AddCircleIcon />
        </button>}
      </form>
    </div>
  );
}

export default CreateArea;
