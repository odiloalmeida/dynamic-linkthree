import React from 'react';
import './admin.css'
import { Input} from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Header } from '../../components/Header'
import { MdAddLink } from 'react-icons/md'

export default function Admin(){
    return(
        <div className='admin-container'>
            <Header/>
            
            <Logo size={10}/>

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

                <button  className='btn-register' type='submit'>Cadastrar<MdAddLink size={24} color='#fff'/></button>
                
            </form>

            <h2>Meus Links</h2>

            <asside>

                <section className='link-area'>
                    <a className='link-text' href='https://www.linkedin.com/in/odilo-almeida-7538a4236/'><p>Meu canal no club Prive</p></a>
                    <button className='btn-delet'>BTN-DELET</button>
                </section>

                <section className='link-area'>
                    <a className='link-text' href='https://www.linkedin.com/in/odilo-almeida-7538a4236/'><p>Meu canal no club Prive</p></a>
                    <button className='btn-delet'>BTN-DELET</button>
                </section>

                <section className='link-area'>
                    <a className='link-text' href='https://www.linkedin.com/in/odilo-almeida-7538a4236/'><p>Meu canal no club Prive</p></a>
                    <button className='btn-delet'>BTN-DELET</button>
                </section>

            </asside>

        </div>
    )
}