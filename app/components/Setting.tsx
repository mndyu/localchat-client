import React, { useState, useEffect, ReactNode } from 'react';
import styles from './Setting.css'
import Modal from './Modal'

import Userinfo from './Userinfo'
import GroupCreate from './GroupCraeteForm'
import GroupIntive from './GroupInviteForm'
import Groupdismiss from './GroupDismissForm'

function App() {
  const [open, setOpen] = useState(false)
  const [context, setContext] = useState(<></>)

  const openModal = (func: any) => {
    setOpen(true)
    setContext(func)
  }

  const closeModal = () => {
    setOpen(false)
  }
  
  const closeCatch = (e: React.KeyboardEvent) => {
    if (e.keyCode == 27) {
      closeModal()
    }
  }  
  
  return (
    <div onKeyDown={closeCatch} className={styles.container}>
      <div onClick={e=> openModal(<Userinfo />)} tabIndex={0}>
        user name change modal
      </div>
      <div onClick={e=> openModal(<GroupCreate />)} tabIndex={0}>
        group create btn
      </div>
      <div onClick={e=> openModal(<GroupIntive />)} tabIndex={0}>
        group invite modal
      </div>
      <div onClick={e=> openModal(<Groupdismiss />)} tabIndex={0}>
        group dismiss btn
      </div>
      <div  className={styles.modalcont}>
        {
          open ? 
          <Modal closeModal={closeModal}>
            {context}
          </Modal> 
          :
          null
        }
      </div>
    </div>
    );
  }
  
export default App;