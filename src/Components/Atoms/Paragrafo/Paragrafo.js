import React from "react";
import "./Paragrafo.css";


const Paragrafo = (props) =>{
    return(
        <div className="paragrafo_container">
            <p className="IDE_paragrafo">{props.paragrafo}</p>
        </div>
    )
}


export default Paragrafo;