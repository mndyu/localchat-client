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
  const [info, setInfo] = useState(false)

  const openMessage = () => {
    setOpen(true) 
    //send open flag true, time
    // new Date()
  }

  const getTime = () => {
    return new Date().toLocaleString()
  }

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            {message.name}
          </div>
          <div className={styles.time}>
            {message.date ? message.date : getTime()}            
          </div>          
          <div className={styles.info}onClick={(e) => setInfo(!info)}>
            info
          </div>
        </div>
        {
          info ? 
          <div className={styles.subheader}>
            <div>
              open flag:false
            </div>
            <div>
              opentime:{getTime()}
            </div>
            <div>
               sendtime:{getTime()}
            </div>
          </div>
          :
          null
        }
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