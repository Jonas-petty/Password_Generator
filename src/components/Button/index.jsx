import React from 'react';

import Arrow from '../../assets/arrow.svg'

import "./style.css"

function Button(props) {
    return ( 
        <button onClick={props.onClickFunction}>{props.text} <img src={Arrow} alt="" /></button>
     );
}

export default Button;