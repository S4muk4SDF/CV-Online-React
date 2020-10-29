import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

function Navbar() {
    return (
        <div>
            
            <nav className="NavBar">
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre mim</Link>
                <Link to="/contato">Contatos</Link>
            </nav>

            {/* <div className="NavBar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre mim</Link></li>
                    <li><Link to="/contato">Contatos</Link></li>
                </ul>
            </div> */}
            
        </div>
    )
}

export default Navbar; 
