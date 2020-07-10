import React from 'react';
import "./Section.css";


const Section = (props) =>{
    return(
        <section className="container">
            
                <img src={props.imagemSeccao} alt={props.legenda}/>
                <p>{props.textoAlter}</p>
                
            <div>
                <p className="section_texto">{props.texto}</p>
            </div>
        </section>
    )
}

export default Section;