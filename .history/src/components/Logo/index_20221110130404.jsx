import React from 'react'
import './logo.css'
import { Link} from 'react-router-dom'


export function Logo() {
    return(
        <Link to='/'>
        <h1>DevLink</h1>
        </Link>
    )
}