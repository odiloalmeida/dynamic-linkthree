import React from "react";

import './social.css'

export function Social( url ) {
    return(
        <a className="social" href={url} target='_blank' rel="noopener noreferrer">Icone</a>
    )
}