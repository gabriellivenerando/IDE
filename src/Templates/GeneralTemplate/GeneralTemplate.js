import React from 'react';
import { ReactComponent as Logo } from "../../Imagens/logo.svg";
import './GeneralTemplate.css';


class GeneralTemplate extends React.Component{
    render(){
        return(
            <>
            <nav className="navbar">
                <div>
                    <Logo/>
                </div>
                <ul>
                    
                </ul>
            </nav>
          
            </>
        )
    }
}


export default GeneralTemplate;