import React from 'react';

import './error.css'

import { Link} from 'react-router-dom';
import { Logo } from '../../components/Logo'

export default function Error(){
    return(
        <div className='error'>
            <h1>Página não encontrada</h1>
            <p>A página que voce procurou não existe</p>
            <Link className='link' to='/'>
                Voltar a Home page
            </Link>
        </div>
    )
}