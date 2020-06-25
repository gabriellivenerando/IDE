import React from 'react';
import "./Section.css";


const Section = ({imagem, texto}) =>{
    return(
        <section>
            <div>
                <imagem src={imagem}/>
            </div>
            <div>
                <p>{texto}</p>
            </div>
        </section>
    )
}

export default Section;