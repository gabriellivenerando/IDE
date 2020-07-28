import React from "react";
import "./TituloPrincipal.css";


const TituloPrincipal = (props) =>{
    return(
        <h1 className={props.TituloPrincipal}>{props.titulo}</h1>
    )
}


export default TituloPrincipal;