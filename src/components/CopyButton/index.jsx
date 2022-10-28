import React from 'react';

import CopyIcon from '../../assets/copy.svg'

import './style.css'

function CopyButton(props) {

    return ( 
        <button className='copy_button' onClick={props.copyValue}>{props.value} <img src={CopyIcon} alt="imagem" /></button>
     );
}   
export default CopyButton;