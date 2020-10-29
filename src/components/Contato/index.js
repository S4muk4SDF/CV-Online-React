import React from 'react';

import './style.css';

import Navbar from '../Navbar';
import Card from './Card';

function Contato() {
    return (
        <div>
           <Navbar /> 

            <div className="titulo">
                <h1>contatos</h1>
            </div>

            <div className="redes_socias">
                <Card link="https://www.instagram.com/_s4muk4.sdf_/" titulo="instagram" className="instagram"/>
                <Card link="https://www.facebook.com/samuel.diasfarias" titulo="facebook" className="facebook"/>
                <Card link="https://www.linkedin.com/in/samuel-dias-2713821a9/" titulo="linkedin" className="linkedin"/>
                <Card link="https://github.com/S4muk4SDF" titulo="github" className="github"/>
            </div>

        </div>
    )
}

export default Contato; 
