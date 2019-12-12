import React from 'react'
import '../../styles/MainBody.css';

export default function Info({title, pageInfo}) {
    return (
        <div className = 'info-page'>
            <h2>{title}</h2>
            <p>{pageInfo}</p>
        </div>
    )
}
