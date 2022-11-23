import React from 'react'
import './logo.css'
import { Link} from 'react-router-dom'


export function Logo() {
    return(
        <Link className='one' to='/'>
        <h1>Dev<span className='two'>Link3</span></h1>
        </Link>
    )
}