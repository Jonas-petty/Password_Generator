import React, { useState, useEffect } from 'react';

import CopyButton from './components/CopyButton/index'
import Slider from './components/Slider/index';
import Button from './components/Button/index'
import PasswordStrength from './components/PasswordStrength/index'

function App() {
  const [amount, setAmount] = useState('10')
  const [password, setPassword] = useState('**********')
  const [level, setLevel] = useState(1)

  useEffect(() => {
      if (amount <= 5) {
        setLevel(1)
      } else if (amount <= 10) {
        setLevel(2)
      } else if (amount <= 15) {
        setLevel(3)
      } else {
        setLevel(4)
      }
    }, [amount])

  function generatePassword() {
    const upper = document.getElementById('upper')
    const lower = document.getElementById('lower')
    const number = document.getElementById('number')
    const simbols = document.getElementById('simbols')

    let values = ''

    let generatedPassword = ''
    if (upper.checked) {
      values += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if (lower.checked) {
      values += 'abcdefghijklmnopqrstuvwxyz'
    }
    if (number.checked) {
      values += '0123456789'
    }
    if (simbols.checked) {
      values += '!*_-@:;,.'
    }
    
    // const values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!*_-@:;,.'

    for (let i = 1; i <= amount; i++) {
      generatedPassword += values.charAt(Math.floor(Math.random() * values.length))
    }
    setPassword(generatedPassword)
  }

  function CopyValue() {
    navigator.clipboard.writeText(password)
    alert(`Copiado: ${password}`)
  }

  return (
    <div className="container">
      <div className="content">
        <header>
          <h1>Gerador de Senhas</h1>
        </header>

        <CopyButton value={password}
          copyValue={CopyValue}/>

        <div className="options">
          <Slider amount={amount} setAmount={setAmount}/>

          <fieldset>
            <label htmlFor="upper"><input type="checkbox" name="option" id="upper" defaultChecked /> Incluir letras maiúsculas</label>
            <label htmlFor="lower"><input type="checkbox" name="option" id="lower" defaultChecked /> Incluir letras minúsculas</label>
            <label htmlFor="number"><input type="checkbox" name="option" id="number" /> Inclur números</label>
            <label htmlFor="simbols"><input type="checkbox" name="option" id="simbols" /> Incluir Símbolos</label>
          </fieldset>
          <PasswordStrength
            level={level}/>
          <Button text={"Gerar"}
            onClickFunction={generatePassword}/>
        </div>
        
      </div>
    </div>
  )
}
export default App
