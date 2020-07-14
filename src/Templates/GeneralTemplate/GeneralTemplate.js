import React, {Component} from "react";
import Logo from "../../imagens/logo.svg";

import "./GeneralTemplate.css";




class GeneralTemplate extends Component{
    render(){
        return(
            <>
            <nav className="menu-container">
                <div>
                    <img src={Logo}></img>
                </div>

                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        IDE
                    </li>
                    <li>
                        Projeto Esperança
                    </li>
                </ul>
            </nav>

            <header>
            </header>

            </>
            
        
            
        )
    }
}

export default GeneralTemplate;