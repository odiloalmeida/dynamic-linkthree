import { useState, useEffect } from "react"
import React from "react";

/*import { auth } from '../services/firebaseConection'

import { onAuthStateChanged} from 'firebase/auth'*/
import { Navigate } from "react-router-dom";

export default function Private({ children }){
    const[loading, setLoading] = useState(true)
    const[signed, setSigned] = useState(false);

    if(loading){
        return(
            <div></div>
        )
    }

    if(!signed){
        return <Navigate to="/login"/>
    }
    return children
}