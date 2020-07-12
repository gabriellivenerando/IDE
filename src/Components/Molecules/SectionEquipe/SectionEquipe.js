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
                <p className="nomeEquipeLideranca">{props.nomeEquipe}</p>
                <p className="lideranca">{props.nomeLideranca}</p>
            </div>
        </div>
        </>
    )
}

export default Equipe;