import React from 'react';
import './style.css'

import ProjetosTemplate from './Projetos_Template'

function Projetos() {

    return (
        <main>
            <h1>Projetos</h1>

            <div className="projetos">

                <ProjetosTemplate titulo="Projeto Mercado" link="https://github.com/S4muk4SDF/Projeto-Mercado"/>
                <ProjetosTemplate titulo="Projeto Escolar" link="https://github.com/S4muk4SDF/Projeto-Escolar-"/>
                <ProjetosTemplate titulo="Página de Apresentação 1.0" link="#"/>
                <ProjetosTemplate titulo="Mini Blog - Framework" link="https://github.com/S4muk4SDF/atividade_framework"/>
                <ProjetosTemplate titulo="Atividade JavaScript" link="https://github.com/S4muk4SDF/atividade-javaScript"/>

            </div>
        </main>
    )
}

export default Projetos;