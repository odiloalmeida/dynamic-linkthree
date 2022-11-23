import React from "react";
import { GoSignOut } from "react-icons/go";
import './header.css'
import { Link } from 'react-router-dom'

export function Header(){
    return(
            <header  className="header-container">
                <nav>
                    <button border='none'><GoSignOut size={28}color="#db2629"/></button>                
                    <Link to="/admin">
                        Links
                    </Link>

                    <Link to="/admin/social">
                        Redes Sociais
                    </Link>
                </nav>
            </header>
    )
}