import React, { Component } from "react";
import Logo from "../../imagens/logo.svg";
import { Link } from "react-router-dom";

import Teste from "../../imagens/bannerIDE.jpg"

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
                    <img src={Teste}></img>
                </header>
            </>



        )
    }
}

export default GeneralTemplate;