import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './MessageCard.scss'
import {markdown} from 'markdown';

type Props = {
  message: any
};
// UI concept -> Post Cart | Hagaki
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
            test time
          </div>          
          <div className={styles.info}>
            info
          </div>
        </div>
        {opened ? 
        <div className={styles.body}>
          {message.body}
          <div dangerouslySetInnerHTML={{__html: markdown.toHTML( "Hello *World*!" )}}/>
        </div>        
        :
        <div className={styles.unopen} onClick={e => openMessage()}>
          Read Message Click Here

        </div>        
        }
      </div>
    );
  }
  
export default App;