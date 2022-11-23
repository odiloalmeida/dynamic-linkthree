import React from 'react';
import './admin.css'
import { Input} from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Header } from '../../components/Header'

export default function Admin(){
    return(
        <div className='admin-container'>
            <Header/>
            
            <Logo/>

            <form className='form'>

                <label className='label'>Nome do Link</label>
                <Input
                    placeholder='Nome do Link'
                />

                <label className='label'>Url do Link</label>
                <Input
                    placeholder='URL do Link'
                    type='url'
                />

                <section>

                    <label className='label-right'>Cor da fonte </label>
                    <Input type='color'/>

                    <label className='label-right'>Cor de fundo </label>
                    <Input type='color'/>

                </section>

                <button type='submit'>Cadastrar</button>
                
            </form>
        </div>
    )
}