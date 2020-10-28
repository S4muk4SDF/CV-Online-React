import React from 'react';
import '../../index.css';
import './style.css';

import Navbar from '../Navbar';

import SobreMim from './Sobre_Mim'
import Educacao from './Educacao'
import Interesses from './Interesses'
import Skills from './Skills'
import Projetos from './Projetos'

function Sobre() {
    return (
        <div>
            <Navbar />

            <div className="conteudo">

                <div className="img_Perfil">
                    <img src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/100547180_1725110200974479_261654694777061376_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=f2RCb_5sES4AX_xvNUr&_nc_ht=scontent-gru2-2.xx&oh=a8e908a0160414635cd5d27dbd5ff9ef&oe=5FBE3C0F"></img>
                </div>

                <div className="info_Perfil">

                    <SobreMim />

                    <Educacao />  

                    <Interesses />                  

                    <Skills />                               

                    <Projetos />

                </div>

            </div>

        </div>
    )
}

export default Sobre; 
