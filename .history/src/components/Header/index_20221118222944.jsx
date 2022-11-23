import React from "react";
import { GoSignOut } from "react-icons/go";
import './header.css'

export function Header(){
    return(
            <header>
                <nav className="header-container">
                    <button border='none'><GoSignOut size={28}color="#db2629"/></button>                
                    <p>Aqui é o header</p>
                </nav>
            </header>
    )
}