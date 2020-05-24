import React, { useState, useEffect } from 'react';
import styles from './GroupContext.scss'

import Modal from './Modal'
import GroupSetting from './GroupSetting'

type Props = {
    X: number,
    Y: number,
    close: any,
  };

function App({X,Y, close}: Props) {
    const [open, setOpen] = useState(false)

    const closeContext = () => {
        close(false)
    }

    const openModal = () => {
        console.log("open context modal")
        setOpen(true)
    }

    const closeModal = () => {
        console.log("open context modal")
        setOpen(false)
    }


    return (
      <div className={styles.container} style={{
          top: Y,
          left: X
      }}
        onMouseLeave={closeContext}
      >
            <div onClick={openModal}>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            {
                open ?
                <Modal closeModal={closeModal}>
                    <GroupSetting groupId="123"/>
                </Modal>
                :
                null
            }
      </div>
    );
  }

export default App;
