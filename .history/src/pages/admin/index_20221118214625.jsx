import React from 'react';
import './admin.css'
import { Input} from '../../components/Input'

export default function Admin(){
    return(
        <div className='admin-container'>
            <p>Cor da fonte: </p>
            <Input type='color'/>
            <p>Cor de fundo: </p>
            <Input type='color' height='50px'/>
        </div>
    )
}