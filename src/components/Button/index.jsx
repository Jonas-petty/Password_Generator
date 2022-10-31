import React from 'react';

import Arrow from '../../assets/arrow.svg'
import AltArrow from '../../assets/altarrow.svg'

import "./style.css"

function Button(props) {

    return ( 
        <button onClick={props.onClickFunction}>{props.text} <img src={Arrow} alt="Ícone de seta" /></button>
     );
}

export default Button;