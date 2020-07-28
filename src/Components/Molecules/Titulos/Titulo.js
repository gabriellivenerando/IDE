import React from 'react';
import './Titulo.css';



const Titulo = (props) =>{
    return (
        <section className={props.nomeDaClass} >
            
                <h2 className="titulo1">{props.titulo}</h2>
           
        </section>
    )
}


export default Titulo;