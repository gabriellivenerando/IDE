import React from 'react';


const Icone = ({imagemIcone, subtitulo}) =>{
    return(
            <div>
                <img src={imagemIcone}></img>
                <p>{subtitulo}</p>
            </div>
    )
}

export default Icone;