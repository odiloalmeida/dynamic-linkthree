import React from "react";
import { GoSignOut } from "react-icons/go";
import './header.css'

export function Header(){
    return(
            <nav className="header-container">
                <button>
                <GoSignOut color="red"/>
                </button>
                <p>Aqui é o header</p>
            </nav>
    )
}