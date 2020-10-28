import React from 'react';
import './style.css'

function ProjetosTemplate(props) {
    const {titulo, link} = props
    return (
        <a href={link} target="_blank" className="Projetos_Template">{titulo}</a>
    )
}

export default ProjetosTemplate;