import React from 'react';
import "./Icone.css"


const Icone = (props) =>{
    return(
            <div className="icone-container">
                <img className="icone_img" src={props.imagemIcone}></img>
                <p className="icone_subtitulo">{props.subtitulo}</p>
            </div>
    )
}

export default Icone;