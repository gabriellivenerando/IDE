import React, {Component} from "react";

import "./GeneralTemplate.css";




class GeneralTemplate extends Component{
    render(){
        return(
            <>
            <nav className="menu-container">
                <div>
                    
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
                <img src={this.props.banner}/>
            </header>

            </>
            
        
            
        )
    }
}

export default GeneralTemplate;