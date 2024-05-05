import { React, useState } from 'react'
import './Notification.css'
import { MdClose } from 'react-icons/md'

function Notification({text}) {

    const [showNotification, setShowNotification] = useState(false)

    return (
        <div className={`notification-main-container ${showNotification ? "show" : ""}`}>
            <p>{text}</p>
            <div className="close-btn-container" onClick={() => { setShowNotification(false) }}>
                <MdClose />
            </div>
        </div>
    )
}

export default Notification 