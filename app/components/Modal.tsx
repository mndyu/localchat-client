import React, { ReactNode, useState, useEffect } from 'react';

import styles from './Modal.css'

import Modal from '@material-ui/core/Modal';

type Props = {
    closeModal: Function;
    children: ReactNode;
    open: boolean;
};
  
function App(props: Props) {
    const { children } = props;

    return (
        <div>
            <Modal open={props.open}  onClose={e => props.closeModal()} >
                <>{children}</>
            </Modal>
        </div>
    );
  }
  
export default App;

/**
 * 
        <div className={styles.modal} >
            <div className={styles.modalcontent}>
                <span onClick={e => props.closeModal()}  className={styles.close}>&times;</span>
                <>{children}</>
            </div>
        </div>




 */