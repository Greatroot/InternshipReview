import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

// TODO: Make it so that the user can click anywhere on the screen to close modal
// { header, content, actions, show, onClose }

const Modal = (props) => {
    if(!props.show) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal" onClick={ props.onClose }>
            <div className="popup" onClick={ (e) => e.stopPropagation() }>
                <h1>{ props.header }</h1>
                <div className='confirmed'>
                    <p>{ props.content }</p>
                </div>
                { props.actions }
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;

// Ben's attempted verison of the Modal, which I realize is not needed
// since Sophia already made her own version.

// <div className="overlay">
//     <div className="header">
//         { header }
//     </div>
//     <div className="content">
//         { content }
//     </div>
//     <div className="buttons">
//         { actions }
//     </div>
// </div>
