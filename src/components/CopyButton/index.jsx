import React from 'react';

import './style.css'

function CopyButton(props) {

    return ( 
        <button onClick={props.copyValue}>{props.value}</button>
     );
}   
export default CopyButton;