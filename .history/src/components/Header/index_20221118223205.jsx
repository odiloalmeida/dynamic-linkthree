import React from "react";
import { GoSignOut } from "react-icons/go";
import './header.css'
import { Link } from 'react-router-dom'

export function Header(){
    return(
            <header>
                <nav className="header-container">
                    <button border='none'><GoSignOut size={28}color="#db2629"/></button>                
                    <Link href='https://google.com.br'/>
                </nav>
            </header>
    )
}