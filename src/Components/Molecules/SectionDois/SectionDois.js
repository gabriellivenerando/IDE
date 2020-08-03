import React from "react";
import "./SectionDois.css";


const SectionDois = (props) =>{
    return (
        <section className="sectionDois_container">
            <div className="section_textoDois">
                <p>{props.textoUm}</p>
            </div>
            <div className="section_textoDois">
                <p>{props.textoDois}</p>
            </div>
        </section>
    )

    

}

export default SectionDois;