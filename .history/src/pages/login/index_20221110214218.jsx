import React from 'react';
import './login.css'
import { Logo } from '../../components/Logo'

export default function Login(){
    return(
        <div className='login-container'>

            <Logo/>

            <form>
            <input type="email" name="email" placeholder="Digite seu e-mail" autocomplete />
            </form>
            
        </div>
    )
}