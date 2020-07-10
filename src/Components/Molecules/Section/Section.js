import React from 'react';
import "./Section.css";


const Section = (props) =>{
    return(
        <section className="container">
            
                <img src={props.imagemSeccao} alt={props.legenda}/>
                <p>{props.textoAlter}</p>
                
            <div>
                <h2 className="section_subtitulo">{props.subtitulo}</h2>
                <p className="section_texto">{props.texto}</p>
            </div>
        </section>
    )
}

export default Section;