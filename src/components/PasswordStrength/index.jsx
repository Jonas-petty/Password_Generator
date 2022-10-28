import React from 'react';

import './sytle.css'

function PasswordStrength({level}) {
    let strength = '' 
    switch (level) {
        case 1:
            strength = 'Fácil'
            break;
        case 2:
            strength = 'Normal'
            break;
        case 3:
            strength = 'Difícil'
            break;
        case 4:
            strength = 'Muito difícil'
            break;
    
        default:
            break;
    }

    return ( 
        <div className='levels_container'>
            <p className='strength'>Strength</p>
            <p>{strength}</p>
            <div className="levels">
                <div className="level 1"></div>
                <div className="level 2"></div>
                <div className="level 3"></div>
                <div className="level 4"></div>
            </div>
        </div>
     );
}

export default PasswordStrength;