import React from "react";

function Menu(props){

    const listLinks = props.links.map((link, index)=> <li className="navLinks" key= {index}>{link}</li>)

    return(
        <ul className="navUl">
            {listLinks}
        </ul>
    );
}

export default Menu;