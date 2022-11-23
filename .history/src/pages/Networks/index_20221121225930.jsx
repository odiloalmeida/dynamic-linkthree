import React from "react";
import "./networks.css";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export default function Networks(){
    return(
        <div className="social-container">
            <Header/>

            <h1 className="title-social"> Suas redes sociais</h1>

            <form className="form">
                <label className="label">Link do LinkedIn</label>
                <Input
                    placeholder="Digite a URL do seu LinkedIn"
                />

                <label className="label">Link do Instagram</label>
                <Input
                    placeholder="Digite a URL do seu Instagram"
                />

                <label className="label">Link do Whatssap</label>
                <Input
                    placeholder="Digite a URL do seu Whatssap"
                />

                <button type="submit" className="btn-register"> Salvar Links </button>

            </form>
        </div>
    )
}