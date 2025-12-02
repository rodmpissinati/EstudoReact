import React from "react";
import "./App.css";
import Menu from "./Menu.js";

function Header(props){
    return(
        <div className="nav">
            <h2 className="navTittle">{props.name}</h2>

            <Menu links={props.links}></Menu>
            
        </div>
    );

}


export default Header;  