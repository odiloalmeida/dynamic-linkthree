import React, { useState , useEffect} from "react";
import "./networks.css";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MdAddLink } from "react-icons/md";

import { db } from "../../services/firebaseConection"
import {
    setDoc,
    doc,
    getDoc,
} from 'firebase/firestore'
import { async } from "@firebase/util";

export default function Networks(){

    const [linkedIn, setLinkedIn] = useState("");
    const [instagram, setInstagram] = useState("");
    const [whatssap, setWhatssap] = useState("");

    useEffect(() => {

        function loadLinks(){
            const docRef = doc(db, "social", "link")
            getDoc(docRef)
            .then( (snapshot) => {
                console.log(snapshot.data())
            })
        }

        loadLinks();

    }, [])

    async function handleSave(e){
        e.preventDefault();

        await setDoc(doc(db, "redes", "link"), {
            linkedin: linkedIn,
            instagram: instagram,
            whatssap: whatssap
        })
        .then(() => alert("Links atualizados com sucesso") )
        .catch( (error) =>{
            console.log(error)
        })

    }

    return(
        <div className="social-container">
            <Header/>

            <h1 className="title-social"> Suas redes sociais</h1>

            <form className="form" onSubmit={handleSave}>
                <label className="label">Link do LinkedIn</label>
                <Input
                    value={linkedIn}
                    onChange={(e) => setLinkedIn(e.target.value)}
                    placeholder="Digite a URL do seu LinkedIn"
                />

                <label className="label">Link do Instagram</label>
                <Input
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder="Digite a URL do seu Instagram"
                />

                <label className="label">Link do Whatssap</label>
                <Input
                    value={whatssap}
                    onChange={(e) => setWhatssap(e.target.value)}
                    placeholder="Digite a URL do seu Whatssap"
                />
                
                <br/>
                
                <button 
                type="submit" 
                className="btn-register"
                onClick={ () => {
                    alert('BOTÃO FOI CLICADO')
                }}
                > 
                Salvar Links <MdAddLink size={24} color="#fff" />
                </button>

            </form>
        </div>
    )
}