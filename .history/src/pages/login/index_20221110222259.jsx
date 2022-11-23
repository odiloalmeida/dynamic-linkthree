import {React , useState} from 'react';
import './login.css'
import { Logo } from '../../components/Logo'

export default function Login(){

    const [email, setEmail] = useState("a");
    const [password, setPassword] = useState("a");

    function handleLogin(){
        alert('TEST')
    }

    return(
        <div className='login-container'>

            <Logo/>

            <form className='forms' onSubmit={handleLogin}>

            <input 
            type="email" 
            name="email"
            value={email}
            onChange={ (e) => setEmail (e.target.value) } 
            placeholder="Digite seu e-mail" 
            autocomplete />

            <input 
            type="password" 
            name="password"
            value={password}
            onChange={ (e) => setPassword (e.target.value) } 
            placeholder="*******" 
            autocomplete="on" />

            <button type='submit'>Acessar</button>
            </form>
            
        </div>
    )
}