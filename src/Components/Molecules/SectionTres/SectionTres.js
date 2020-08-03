import React from "react";
import "./SectionTres.css";


const SectionTres = (props) =>{
    return (
        <section className="sectionTres_container">
            <div className="sectionTres_img">
                <img src={props.imagemMapa}></img>
            </div>
            <div className="section_textoTres">
                <p>{props.textoSectionTres}</p>
            </div>
        </section>
    )

    

}

export default SectionTres;