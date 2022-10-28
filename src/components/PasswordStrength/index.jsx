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
                <div className={`level ${level >= 1 ? 'active' : ''}`}></div>
                <div className={`level ${level >= 2 ? 'active' : ''}`}></div>
                <div className={`level ${level >= 3 ? 'active' : ''}`}></div>
                <div className={`level ${level >= 4 ? 'active' : ''}`}></div>
            </div>
        </div>
     );
}

export default PasswordStrength;