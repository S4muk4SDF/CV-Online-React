import React from 'react';

import './style.css';

function Card (props) {
    const {titulo, link, className} = props
    return (
        <div class={`Card ${className}`}>
            <a href={link} target="_blank">{titulo}</a>
        </div>
    )
}

export default Card;