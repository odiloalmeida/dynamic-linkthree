import React from "react";
import { GoSignOut } from "react-icons/go";
import './header.css'

export function Header(){
    return(
            <nav className="header-container">
                <button border='none'><GoSignOut size='30px'color="red" background='transparent'/></button>                
                <p>Aqui é o header</p>
            </nav>
    )
}