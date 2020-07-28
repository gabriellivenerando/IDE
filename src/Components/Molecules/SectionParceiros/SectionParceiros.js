import React from "react";
import "./SectionParceiros.css";
import LogoAtuacaoVoluntaria from "../../../imagens/atuacaoVoluntariaLogo.svg";
import LogoCalcada from "../../../imagens/calcadaLogo.svg";
import LogoProCriado from "../../../imagens/procriadoLogo.svg";


const SectionParceiros = () =>{
    return(

        <>
        <div className="Imagens_cotainer">
            <div>
                <div  className="ImagemParceiros_container">
                    <img className="IDE_SectionParceiros" src={LogoAtuacaoVoluntaria}/>
                </div>
                <div  className="ImagemParceiros_container">
                    <img className="IDE_SectionParceiros" src={LogoCalcada}/>
                </div>
            </div>
            <div className="ImagemTres_container">
                <div className="ImagemParceiros_container">
                    <img className="IDE_SectionParceiros" src={LogoProCriado}/>
                </div>
            </div>
        </div>
        </>


    )
}


export default SectionParceiros;