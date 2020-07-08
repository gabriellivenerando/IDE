import React from "react";
import "./SectionEquipe.css";

const Equipe = (props) => {
    return(
        <>
        <div>
            <div>
                <img className="img_equipe" src={props.imagemEquipe}/>
            </div>
            <div>
                <p>{props.nomeEquipe}</p>
            </div>
        </div>
        </>
    )
}

export default Equipe;