import React from 'react';

export default function Home(){
    return(
        <div className='home-container'>
            <img className='profilepicture' alt='myprofile' src='https://avatars.githubusercontent.com/u/111534893?v=4'/>
            <h1>Seu nome</h1>
            <span> Veja meus Links</span>

            <section className='link-area'>
                <a href='#'><p>Meu canal no club Prive</p></a>
            </section>
        </div>
    )
}