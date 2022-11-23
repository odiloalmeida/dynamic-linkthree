import React from 'react';
import './admin.css'
import { Input} from '../../components/Input'
import { Logo } from '../../components/Logo'

export default function Admin(){
    return(
        <div className='admin-container'>
            <section>
                <Logo font-size='50px'/>
                <p>Cor da fonte: </p>
                <Input type='color'/>
                <p>Cor de fundo: </p>
                <Input type='color'/>
            </section>
        </div>
    )
}