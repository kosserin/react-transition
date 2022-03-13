import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 100
};

const Modal = (props) => {

    const nodeRef = React.useRef(null)

  return (
    <CSSTransition nodeRef={nodeRef} 
    mountOnEnter 
    unmountOnExit
    in={props.show}
    timeout={animationTiming}
    classNames={{
            enter: '',
            enterActive: 'ModalOpen',
            exit: '',
            exitActive: 'ModalClosed'
        }}>
    <div ref={nodeRef} className='modal'>
    <h1>This is modal you clicked button to show bro!</h1>
    <p>Click here or in background to close modal and see fancy animation!</p>
    <button onClick={() => {props.onCloseModal()}}>Close</button>
    </div>
    </CSSTransition>
  )
}

export default Modal