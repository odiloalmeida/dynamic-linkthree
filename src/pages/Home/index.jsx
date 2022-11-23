import React from 'react';
import { useState, useEffect } from "react";
import './home.css'
import { Social } from '../../components/Social'
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import {
    getDocs,
    collection,
    orderBy,
    query,
    doc,
    getDoc
} from 'firebase/firestore'

import {db} from '../../services/firebaseConection'

export default function Home(){

    const[links, setLinks] = useState([]);

    const[socialLinks, setSocialLinks] = useState({});


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

                setLinks(list);
            })
        }

        loadLinks();
    })


    useEffect(()=> {
        function loadSocialLinks(){
            const docRef = doc(db, "redes", "link")

            getDoc(docRef)
            .then((snapshot) => {

                if(snapshot.data() !== undefined){
                    setSocialLinks({
                        linkedin: snapshot.data().linkedin,
                        instagram: snapshot.data().instagram,
                        whatssap: snapshot.data().whatssap
                    })
                }
            })

        }

        loadSocialLinks();

    }, [])

    return(
        <div className='home-container'>
            <h1>Odilo Almeida</h1>
            <span> Veja meus Links</span>

        <main className='links'>
            {links.map((item)=> (
                <section key={item.id} className='link-area' style={{ backgroundColor: item.bc}}>
                <a className='link-text' 
                href={item.url}>
                    <p style={{color: item.color}}>{item.name}</p>
                </a>
                </section>
            ))}

            {links.length !== 0  && Object.keys(socialLinks).length > 0 && (
                <footer>
                    <Social url={socialLinks.linkedin}>
                        <FaLinkedin size={30} color="#fff" />
                    </Social>

                    <Social url={socialLinks.instagram}>
                        <FaInstagram size={30} color="#fff" />
                    </Social>

                    <Social url={socialLinks.whatssap}>
                        <FaWhatsapp size={30} color="#fff" />
                    </Social>
                </footer>
            )}
            
        </main>
        </div>
    )
}