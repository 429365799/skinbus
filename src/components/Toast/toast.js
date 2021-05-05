import React from 'react'
import './toast.less'

export default function Toast({ appearance, children }) {

    return (
        <div className="toast-content">
            {children}
        </div>
    )
}
