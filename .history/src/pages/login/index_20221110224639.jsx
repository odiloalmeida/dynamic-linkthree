import React from 'react'
import { useState } from 'react'
import { Logo } from '../../components/Logo'
import './login.css'

export default function Login(){
    return(
        <div className="login-container">
      <Logo />

      <form className="forms">
        <input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          autocomplete
        />

        <input
          type="password"
          name="password"
          placeholder="*******"
          autocomplete="on"
        />

        <button type="submit">Acessar</button>
      </form>
    </div>
    )
}
