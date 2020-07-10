import React from 'react';
import './Titulo.css';



const Titulo = (props) =>{
    return (
        <section className={props.nomeDaClass} >
            <div>
                <h2 className="titulo1">{props.titulo}</h2>
            </div>
        </section>
    )
}


export default Titulo;