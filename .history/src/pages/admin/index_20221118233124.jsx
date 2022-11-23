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

                <section className='container-colors'>
                    <div >
                        <label className='label-right'>Cor da fonte </label>
                        <input type="color"/>
                    </div>

                    <div>
                        <label className='label-right'>Cor de fundo </label>
                        <input type="color"/>
                    </div>

                </section>

                <button  className='btn-register' type='submit'>Cadastrar</button>
                
            </form>
        </div>
    )
}