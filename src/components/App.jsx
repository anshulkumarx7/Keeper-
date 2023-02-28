import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const[noteItems,setNoteItems]=useState([]);
    function addNote(note){
        setNoteItems(prevNote=>{
            return [...prevNote,note];
        })
        
    }
    function deleteItem(id){
        setNoteItems((prevNote)=>{
            return prevNote.filter((noteItem,index)=>{
                return index !== id
            })

        })
    }
  return (
    <div>
      <Header />
      <CreateArea toadd={addNote}/>
      {noteItems.map((noteItem,index) => {
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} delete={deleteItem}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
