import React from "react";
import {Link} from "react-router-dom";
import "./Button.css";


const Button = (props) =>{
    return(
        <div className="button_container">
            <Link to="/projetoesperanca">
                <button className="IDE_Button">{props.nomedoButton}</button>
            </Link>
        </div>
    )
}


export default Button;