import React, { Component } from 'react';
import '../../index.css';
import './style.css';

import Navbar from '../Navbar';

import SkillsTemplate from './Skills_Template'
import ProjetosTemplate from './Projetos_Template'


class Sobre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info_Perfil_Class: '...',
            img_Perfil: '...'
        }
    }

    modeDark = () => {
        this.setState({
            info_Perfil_Class: 'info_Perfil_Dark',
            img_Perfil: 'img_Perfil_Dark'
        })
    }

    modeDefault = () => {
        this.setState({
            info_Perfil_Class: 'info_Perfil',
            img_Perfil: 'img_Perfil'
        })
    }

    render() {
        return (
            document.title = "Samuel Dias - Sobre Mim",
            <div>

                <Navbar />

                <div className="temas">
                    <section>
                        <button onClick={this.modeDefault} type="button" class="btn btn-primary">Default</button>
                        <button onClick={this.modeDark} type="button" class="btn btn-dark">Dark</button>
                    </section>
                </div>

                <div className="conteudo">

                    <div className={`img_Perfil ${this.state.img_Perfil}`}>
                        <img src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/100547180_1725110200974479_261654694777061376_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=f2RCb_5sES4AX_xvNUr&_nc_ht=scontent-gru2-2.xx&oh=a8e908a0160414635cd5d27dbd5ff9ef&oe=5FBE3C0F"></img>
                    </div>

                    <div className={`info_Perfil ${this.state.info_Perfil_Class}`}>

                        <h1>Sobre mim</h1>

                        <div className="texto_Sobre_Mim">
                            <p>Meu nome é Samuel, tenho 15 anos, e nasci e moro desde então em Guarulhos/SP.</p>
                        </div>

                        <h1>Educação</h1>

                        <ul>
                            <li>E.E DEPUTADO JOSÉ STOROPOLI - Cursando o 1º ano do Ensino Médio (2020);</li>
                            <li>ARBYTE - Cursando Desenolvimento Web - Front End (2º/2020);</li>
                            <li>SENAI - Cursando Mecânico de Usinagem (2º/2020);</li>
                        </ul>

                        <h1>Interesses</h1>

                        <div className="texto_Interesses">
                            <p>Além da paixão pelas diversas tecnologias existentes, também gosto muito de games, filmes, séries, músicas, etc... Uma outra coisa que gosto bastante também, é de tentar achar uma forma de resolver problemas de maneira fácil e rápida, e sempre estou tentando aplicar isso durante meu dia.</p>
                        </div>

                        <h1>Skills</h1>

                        <div className="skills">
                            <SkillsTemplate titulo="JavaScript" />
                            <SkillsTemplate titulo="HTML" />
                            <SkillsTemplate titulo="CSS" />
                            <SkillsTemplate titulo="MongoDB" />
                            <SkillsTemplate titulo="Swagger" />
                            <SkillsTemplate titulo="Jest" />
                            <SkillsTemplate titulo="React" />
                            <SkillsTemplate titulo="Postgre" />
                        </div>

                        <h1>Projetos</h1>

                        <div className="projetos">

                            <ProjetosTemplate titulo="Projeto Mercado" link="https://github.com/S4muk4SDF/Projeto-Mercado" />
                            <ProjetosTemplate titulo="Projeto Escolar" link="https://github.com/S4muk4SDF/Projeto-Escolar-" />
                            <ProjetosTemplate titulo="Página de Apresentação 1.0" link="#" />
                            <ProjetosTemplate titulo="Mini Blog - Framework" link="https://github.com/S4muk4SDF/atividade_framework" />
                            <ProjetosTemplate titulo="Atividade JavaScript" link="https://github.com/S4muk4SDF/atividade-javaScript" />

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Sobre; 
