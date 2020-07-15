import React from "react";
import "./Footer.css";
import Telefone from "../../imagens/telefone.svg";
import Whats from "../../imagens/whats.svg";
import Email from "../../imagens/email.svg"



const Footer = () =>{
    return(
        <div>
            <nav className="nav_contato">
                <ul>
                    <li>
                        +55 (75) 3237-7204
                    </li>
                    <li>
                        +55 (16) 98102-3350
                    </li>
                    <li>
                        ide.esperanca@gmail.com
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Footer