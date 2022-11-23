import React from 'react';

export default function Home(){
    return(
        <div className='home-container'>
            <img className='profilepicture' alt='myprofile' src='https://avatars.githubusercontent.com/u/111534893?v=4'/>
            <h1>Seu nome</h1>
            <span> Veja meus Links</span>

        <main>
            <section className='link-area'>
                <a className='link-text' href='#'><p>Meu canal no club Prive</p></a>
            </section>
        </main>
        </div>
    )
}