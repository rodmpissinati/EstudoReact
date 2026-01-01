import React from "react";

import {Link} from 'react-router-dom'

function Nav(){

    return(
        <div className="bg-gray-300 flex items-center justify-between px-18 p-7 ">
            <h2>Logo</h2>    
                <ul className=" flex flex-row gap-7">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/sobre'>Sobre</Link></li>
                    <li><Link to='/contato'>Contato</Link></li>
                </ul>
        </div>
    )
}

export default Nav;