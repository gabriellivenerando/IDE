import React from 'react';
import "./Icone.css"


const Icone = (props) =>{
    return(
            <div className="icone-container">
                <img src={props.imagemIcone}></img>
                <p>{props.subtitulo}</p>
            </div>
    )
}

export default Icone;