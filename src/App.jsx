import React, { useState } from 'react';

import CopyButton from './components/CopyButton/index'
import Button from './components/Button/index'

function App() {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState('10')
  const [password, setPassword] = useState('')

  function generatePassword() {
    let generatedPassword = ''
    const values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZefghijklmnopqrstuvwxyz0123456789!*_-@:;,.'

    for (let i = 1; i <= amount; i++) {
      generatedPassword += values.charAt(Math.floor(Math.random() * values.length))
    }
    setPassword(generatedPassword)
  }

  function CopyText() {
    const copiedText = document.getElementById('text').value
    navigator.clipboard.writeText(copiedText)
    alert(`Texto: ${copiedText}`)
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Gerador de Senhas</h1>

        <CopyButton password={password}/>

        <label className="range_title" htmlFor="characters">Quantidade de Caracteres <span className="amount">{amount}</span></label>
        <input type="range" name="characters" id="characters" min="0" max="20"
          onChange={event => setAmount(event.target.value)} value={amount}/>

        <fieldset>
          <label htmlFor="1"><input type="checkbox" name="1" id="" /> Incluir letras maiúsculas</label>
          <label htmlFor="1"><input type="checkbox" name="1" id="" /> Incluir letras minúsculas</label>
          <label htmlFor="1"><input type="checkbox" name="1" id="" /> Inclur números</label>
          <label htmlFor="1"><input type="checkbox" name="1" id="" /> Incluir Símbolos</label>
        </fieldset>

        <Button text={"Gerar"}
          onClickFunction={generatePassword}/>
        
      </div>
    </div>
  )
}
export default App
