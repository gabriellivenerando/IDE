import React, { Component } from "react";
import Logo from "../../imagens/Logo.png";
import { Link } from "react-router-dom";

import Banner from "../../imagens/bannerIDE.jpg"

import "./GeneralTemplate.css";




class GeneralTemplate extends Component {
    render() {
        return (
            <>
                <nav className="menu-container">
                    <div>
                        <Link to="/">
                            <img className="logoIDETemplate" src={Logo}></img>
                        </Link>
                    </div>


                    <ul>
                        <Link to="/">
                            <li>
                                Home
                         </li>
                         </Link>
                         
                         <Link to="/">
                         <li>
                         IDE
                         </li>
                         </Link>
                         
                        <Link to="/projetoesperanca">
                        <li>
                                Projeto Esperança
                                </li>
                                </Link>
                                </ul>
                                
                            </nav>
               
                            
                <header>
                    <img src={Banner}></img>
                </header>
            </>



        )
    }
}

export default GeneralTemplate;