import React from "react";
import "./SectionIDE.css";


const SectionIDE = (props) =>{
    return (
        <section className="SectionIDE_container">
            <div className="section_texto">
                <h2>{props.tituloUm}</h2>
                <p>{props.textoUm}</p>
            </div>
            <div className="section_texto">
                <h2>{props.tituloDois}</h2>
                <p>{props.textoDois}</p>
            </div>
        </section>
    )

    

}

export default SectionIDE;