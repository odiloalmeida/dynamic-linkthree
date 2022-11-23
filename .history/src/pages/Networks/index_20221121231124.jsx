import React, { useState } from "react";
import "./networks.css";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MdAddLink } from "react-icons/md";

export default function Networks(){

    const [linkedIn, setLinkedIn] = useState("");
    const [instagram, setInstagram] = useState("");
    const [whatssap, setWhatssap] = useState("");

    return(
        <div className="social-container">
            <Header/>

            <h1 className="title-social"> Suas redes sociais</h1>

            <form className="form">
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