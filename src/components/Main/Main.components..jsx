import './Main.components.css'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete'
// import AddIcon from '@mui/icons-material/Add';

export default function MainPage(props){

    const [newNotes, setNewNotes] = useState([])

    const [notes, setNotes] = useState({
        id : newNotes.length + 1,
        title : "",
        content : ""
    })


    function handleChange(e){
        const {name, value} = e.target
        setNotes(prevNotes => {
            return {
                ...prevNotes,
                [name] : value
            }
        })
    }

    function addNotes(){
        if (notes.title === "" || notes.content === ""){
            alert("Enter Notes")
        }
        else{
            setNewNotes(prevNotes => {
                return [...prevNotes, notes]
            })
            setNotes({
                id : newNotes.length + 2,
                title : "",
                content : ""
            })
        }
    }

    function deleteNotes(id){
        setNewNotes(prevNotes => {
            return prevNotes.filter(note => note.id !== id)
        })
    }


    return(
        <div className={`main ${props.darkMode ? "dark" : "normal"}`}>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="title" placeholder='Title' value={notes.title} onChange={handleChange}/>
                <textarea name="content" placeholder='Enter Notes' id="" value={notes.content} onChange={handleChange} cols="2" rows="10"></textarea>
                <AddIcon onClick={addNotes} className={`add ${props.darkMode ? "add-style" : "normal"}`}/>
                {/* <button className={`add ${props.darkMode ? "add-style" : "normal"}`} onClick={addNotes}>Add</button> */}
                {/* <AddIcon /> */} 
            </form>


            <div className={`box ${props.darkMode ? "main-style" : "normal"}`}>
                {newNotes.map((noteItem, index) => {
                    return <div className='final-notes' key={index} id={noteItem.id}>
                                <h2>{noteItem.title}</h2>
                                <p style={{marginTop : "0.6rem"}}>{noteItem.content}</p>
                                <DeleteIcon className={`delete ${props.darkMode ? "add-style" : "normal"}`} onClick={() => {deleteNotes(noteItem.id)}}/>
                                {/* <button className={`delete ${props.darkMode ? "add-style" : "normal"}`} onClick={() => {deleteNotes(noteItem.id)}}>Delete</button> */}
                            </div>
                })}

                

            


            </div>

        </div>
    )
}