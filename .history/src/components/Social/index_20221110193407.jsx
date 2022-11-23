import React from "react";

import './social.css'

export function Social( children, url ) {
    return(
        <a className="social" href={url} target='_blank' rel="noopener noreferrer"></a>
        {children}
    )
}