import { useState } from 'react';
import React from 'react';
import './admin.css'
import { Input} from '../../components/Input'
import { Logo } from '../../components/Logo'
import { Header } from '../../components/Header'
import { MdAddLink } from 'react-icons/md'
import { FiTrash2 } from 'react-icons/fi'

export default function Admin(){

    const [nameInput, setNameInput] = useState("");
    const [urlInput, setUrlInput] = useState("");
    const [backgroundColorInput, setBackgroundColorInput] = useState("#555");
    const [textColorInput, setTextColorInput] = useState("#fff");

    return(
        <div className='admin-container'>
            <Header/>
            
            <Logo/>

            <form className='form'>

                <label className='label'>Nome do Link</label>
                <Input
                    placeholder='Nome do Link'
                    value={nameInput} 
                    onChange={ (e) => setNameInput(e.target.value) }
                />

                <label className='label'>Url do Link</label>
                <Input
                    placeholder='URL do Link'
                    type='url'
                    value={urlInput} 
                    onChange={ (e) => setUrlInput(e.target.value) }
                />

                <section className='container-colors'>
                    <div >
                        <label className='label-right'>Cor da fonte </label>
                        <input type="color"
                        value={backgroundColorInput} 
                        onChange={ (e) => setBackgroundColorInput(e.target.value) }
                        />
                    </div>

                    <div>
                        <label className='label-right'>Cor de fundo </label>
                        <input type="color"
                        value={textColorInput} 
                        onChange={ (e) => setTextColorInput(e.target.value) }
                        />
                    </div>

                </section>

                <button  className='btn-register' type='submit'>Cadastrar<MdAddLink size={24} color='#fff'/></button>
                
            </form>

            <h2 className='tittle'>Meus Links</h2>

            <article className='list animate-pop'
            style={{ backgroundColor: "#555" , color: "#fff" }}>
                <p>Grupo Exclusivo Telegram</p>
                <div>
                    <button className="btn-delet">
                        <FiTrash2 size={18} color="#fff"/>
                    </button>
                </div>
            </article>


        </div>
    )
}