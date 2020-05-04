import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './MessageCard.css'

type Props = {
  message: any
};

function App({message}: Props) {
  const [opened, setOpen] = useState(message.flag)

  const openMessage = () => {
    setOpen(true) 
    //send open flag true, time
    // new Date()
  }

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            {message.name}
          </div>
          <div className={styles.time}>
            {message.date}
          </div>          
          <div className={styles.info}>
            info
          </div>
        </div>
        {opened ? 
        <div className={styles.body}>
          {message.body}
        </div>        
        :
        <div className={styles.unopen} onClick={e => setOpen(true)}>
          unreaded message
        </div>        
        }
      </div>
    );
  }
  
export default App;