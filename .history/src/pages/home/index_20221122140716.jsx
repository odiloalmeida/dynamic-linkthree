import React from 'react';
import { useState, useEffect } from "react";
import './home.css'
import { Social } from '../../components/Social'
import { FaLinkedin, FaInstagram, FaWhatsapp, FaListAlt } from 'react-icons/fa'

import {
    getDocs,
    collection,
    orderBy,
    query
} from 'firebase/firestore'

import {db} from '../../services/firebaseConection'

export default function Home(){


    useEffect(()=> {

        function loadLinks(){
            const linksRef = collection(db, "links")
            const queryRef = query(linksRef, orderBy("created", "asc"))

            getDocs(queryRef)
            .then( (snapshot)=> {
                let list = [];

                snapshot.forEach((doc)=> {
                    list.push({
                        name: doc.data().name,
                        url: doc.data().url,
                        bc: doc.data().bc,
                        cl: doc.data().cl,
                    })
                })

                console.log(list)
            })
        }

        loadLinks();
    })

    return(
        <div className='home-container'>
            <img className='profilepicture' alt='myprofile' src='https://avatars.githubusercontent.com/u/111534893?v=4'/>
            <h1>Seu nome</h1>
            <span> Veja meus Links</span>

        <main className='links'>
            <section className='link-area'>
                <a className='link-text' href='https://www.linkedin.com/in/odilo-almeida-7538a4236/#'><p>Meu canal no club Prive</p></a>
            </section>

            <footer>

                <Social url="https://www.linkedin.com/in/odilo-almeida-7538a4236/">
                    <FaLinkedin size={30} color="#fff" />
                </Social>

                <Social url="https://www.instagram.com/odilolalmeida/">
                    <FaInstagram size={30} color="#fff" />
                </Social>

                <Social url="https://wa.me/5588994990655?text=Olá%20tudo%20bem?">
                    <FaWhatsapp size={30} color="#fff" />
                </Social>
            
            </footer>
            
        </main>
        </div>
    )
}