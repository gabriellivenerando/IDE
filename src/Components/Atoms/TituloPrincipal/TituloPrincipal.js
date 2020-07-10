import React from "react";
import "./TituloPrincipal.css";


const TituloPrincipal = (props) =>{
    return(
        <h1 className="Primeiro_titulo">{props.titulo}</h1>
    )
}


export default TituloPrincipal;