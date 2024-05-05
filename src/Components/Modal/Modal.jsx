import React from 'react'
import './Modal.css'
import { MdClose } from 'react-icons/md'

function Modal({setShowModal}) {
    return (
        <div className="modal-outer-container">
            <div className='modal-main-container'>
                <div className="modal-header-container">
                    <h3>Heading</h3>
                    <div className="modal-close-btn" onClick={()=>setShowModal(false)}>
                        <MdClose />
                    </div>
                </div>

                <div className="modal-para-container">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ad voluptas vero nulla qui ut quos doloribus deleniti suscipit, eius ipsa autem quibusdam perspiciatis nihil dolore mollitia dicta molestias. Odit, eos commodi cumque porro iure ullam nostrum voluptas iusto amet laudantium maiores magni suscipit exercitationem quod optio totam tempora aspernatur doloremque illum odio eveniet nam libero. Quam, aspernatu</p>
                </div>
            </div>
        </div>
    )
}

export default Modal    