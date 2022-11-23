import React from 'react'
import { useState } from 'react'
import { Logo } from '../../components/Logo'
import './login.css'
import { auth} from '../../services/firebaseConection'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate} from 'react-router-dom'
import { Input } from '../../components/Input'

export default function Login(){
    const [email , setEmail ] = useState("");
    const [password , setPassword ] = useState("");
    const navigate = useNavigate();
    function handleLogin(e){
        e.preventDefault();

        if(email === "" || password === ""){
          alert('Preencha todos os campos!')
          return;}

        signInWithEmailAndPassword(auth, email, password)
        .then( () => {
          navigate("/admin", {replace: true} )
        })
        .catch(() => {
          alert('Erro ao fazer login')
        })
    }
    return(
        <div className="login-container">
      <Logo />

      <form className="forms" onSubmit={handleLogin}>
        <Input/>
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
