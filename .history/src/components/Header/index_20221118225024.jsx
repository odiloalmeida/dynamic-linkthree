import React from "react";
import { GoSignOut } from "react-icons/go";
import './header.css'
import { Link } from 'react-router-dom'
import { auth} from '../../services/firebaseConection'

export function Header(){
    async function handleLogout(){
        alert('FODA-SE')
    }

    return(
            <header  className="header-container">
                <nav className="nav-header">
                    <button onClick={handleLogout}><GoSignOut size={28}color="#db2629"/></button>                
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