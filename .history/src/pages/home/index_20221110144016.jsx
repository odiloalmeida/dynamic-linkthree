import React from 'react';

export default function Home(){
    return(
        <div className='home-container'>
            <img class='profilepicture' alt='myprofile' src='https://avatars.githubusercontent.com/u/111534893?v=4'/>
            <h1>Seu nome</h1>
            <span> Veja meus Links</span>

            <section>
                <a href='www.google.com.br'><p>Meu canal no club Prive</p></a>
            </section>
        </div>
    )
}