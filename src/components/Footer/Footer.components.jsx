import './Footer.components.css'


export default function Footer(props){
    const year = new Date().getFullYear()

    return(
        <div className={`footer ${props.darkMode ? "head-dark" : "normal"}`}>
            <h5>Copyrights {year}</h5>

        </div>
    )
}