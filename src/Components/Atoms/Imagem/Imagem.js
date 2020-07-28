import React from "react";
import "./Imagem.css";


const Imagem = (props) =>{
    return(
        <div  className="IDEImagem_container">
            <img className="IDE_Imagem" src={props.Imagem}/>
        </div>
    )
}


export default Imagem;