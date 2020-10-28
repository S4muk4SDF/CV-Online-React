import React from 'react';
import './style.css'

function SkillsTemplate (props) {
    const {titulo} = props
    return (
        <h2 className="title">{titulo}</h2>
    )
}

export default SkillsTemplate;