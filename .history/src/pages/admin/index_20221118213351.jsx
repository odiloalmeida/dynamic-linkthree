import React from 'react';
import './admin.css'
import { Input} from '../../components/Input'

export default function Admin(){
    return(
        <div className='admin-container'>
            <Input type='month' width='20px'/>
        </div>
    )
}