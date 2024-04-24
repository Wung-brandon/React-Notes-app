import BoltIcon from '@mui/icons-material/Bolt';
import './Header.components.css'



export default function HeaderPage(props){

    function changeBackground(){
        props.toggle()
    }



    return(
        <div className={`header ${props.darkMode ? "head-dark" : "normal"}`}>
            <h2 style={{color : props.darkMode ? "#ffdc2e" : "#fff"}}><BoltIcon />Notes Keeper App</h2>
            <button className={`mode ${props.darkMode ? "buttonStyles" : ""}`} onClick={changeBackground}>{props.darkMode ? "Dark Mode" : "Light Mode"}</button>
        </div>
    )
}