import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = (props) => {
    return (
        <React.Fragment>
            <div className={styles.backdrop} onClick={() => {props.onCloseModal()}}></div>
        </React.Fragment>
    )
}

export default Backdrop;