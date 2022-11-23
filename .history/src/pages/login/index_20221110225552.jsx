import React from 'react'
import { useState } from 'react'
import { Logo } from '../../components/Logo'
import './login.css'

export default function Login(){
    const [email , setEmail ] = useState("");
    const [password , setPassword ] = useState("");
    function handleLogin(e){
        e.preventDefault();
        console.log(email , password)
        alert('test')
    }
    return(
        <div className="login-container">
      <Logo />

      <form className="forms" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={ (e) => setEmail(e.target.value) }
          autocomplete
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={ (e) => setPassword(e.target.value) }
          placeholder="*******"
          autocomplete="on"
        />

        <button type="submit">Acessar</button>
      </form>
    </div>
    )
}
