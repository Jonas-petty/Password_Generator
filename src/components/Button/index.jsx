import React, { useState } from 'react';

function Button(props) {
    return ( 
        <button onClick={props.onClickFunction}>{props.text}</button>
     );
}

export default Button;