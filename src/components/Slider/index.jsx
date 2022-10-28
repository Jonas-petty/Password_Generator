import React from 'react';

import './style.css'

function Slider({amount, setAmount}) {

    function handleInput(event) {
        const myInput = event.target
        const value = (myInput.value - myInput.min) / (myInput.max - myInput.min) * 100
        myInput.style.background = `linear-gradient(to right, #A5FFAF 0%, #A5FFAF ${value}%, #111115 ${value}%, #111115 100%)`
    }


    return ( 
        <>
            <label className="range_title" htmlFor="characters">Quantidade de Caracteres <span className="amount">{amount}</span></label>
            <input className='range' type="range" name="characters" id="characters" min="0" max="20"
                onChange={event => setAmount(event.target.value)} value={amount}
                onInput={event => handleInput(event)}/>
        </>
     );
}

export default Slider;