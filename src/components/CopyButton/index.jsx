import React from 'react';

import './style.css'

function CopyButton(props) {

    return ( 
        <button>{props.password}</button>
     );
}   
export default CopyButton;