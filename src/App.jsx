import React, { useState, useEffect } from 'react';

import CopyButton from './components/CopyButton/index'
import Button from './components/Button/index'
import PasswordStrength from './components/PasswordStrength/index'

function App() {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('10')
  const [password, setPassword] = useState('')
  const [level, setLevel] = useState(1)

  useEffect(() => {
      if (amount < 5) {
        setLevel(1)
      } else if (amount < 10) {
        setLevel(2)
      } else if (amount < 15) {
        setLevel(3)
      } else {
        setLevel(4)
      }
    }, [amount])

  function generatePassword() {
    let generatedPassword = ''
    const values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZefghijklmnopqrstuvwxyz0123456789!*_-@:;,.'

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

        <label className="range_title" htmlFor="characters">Quantidade de Caracteres <span className="amount">{amount}</span></label>
        <input type="range" name="characters" id="characters" min="0" max="20"
          onChange={event => setAmount(event.target.value)} value={amount}/>

        <fieldset>
          <label htmlFor="1"><input type="checkbox" name="1" id="" /> Incluir letras maiúsculas</label>
          <label htmlFor="2"><input type="checkbox" name="2" id="" /> Incluir letras minúsculas</label>
          <label htmlFor="3"><input type="checkbox" name="3" id="" /> Inclur números</label>
          <label htmlFor="4"><input type="checkbox" name="4" id="" /> Incluir Símbolos</label>
        </fieldset>

        <PasswordStrength 
          level={level}/>

        <Button text={"Gerar"}
          onClickFunction={generatePassword}/>
        
      </div>
    </div>
  )
}
export default App
