import React from 'react'
import './Button.css'

function Button({ text, btnClass, iconName }) {
    return (
        <div className={`btn-outer-container ${btnClass}`}>
            {iconName && <span>{iconName}</span>}{text}
        </div>
    )
}

export default Button