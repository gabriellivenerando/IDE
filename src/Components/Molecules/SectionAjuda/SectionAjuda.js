import React from "react";
import "./SectionAjuda.css";

const SectionAjuda = (props) => {
    return (
       

        <div className="ajuda-container">
            <div>
                <div className="paragrafo-container">
                    <p>{props.paragrafoUm}</p>
                    <p>{props.paragrafoDois}</p>
                </div>
                <div className="imagemAjuda-container">
                    <img src={props.imagemBanco}></img>
                    <p>{props.paragrafoTres}</p>
                </div>
                    <h2>{props.TituloAjuda}</h2>
            </div>
            <div>
                <img className="imagemAjuda" src={props.imagemCriancasAjuda}></img>
            </div>
        </div>

    
    )
}


export default SectionAjuda;