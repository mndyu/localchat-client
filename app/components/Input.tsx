import React, { useState, useEffect } from 'react';
import styles from './Input.css'
import User from './SelectedUser'

type Props = {
  setText: Function;
  selectedUser: any;
  resetUser: Function;
};

function App({setText, selectedUser, resetUser}: Props ) {
  const [message, setMessage] = useState("test")

  const set = () => {
    setText(message)
    setMessage("")
  }

  const onChange = (evt: any) => {    
    setMessage(evt.target.value)
  }

  const resetSentUser = (username: String) => {
    console.log("exit")
    resetUser(username)
  }

  return (
      <div className={styles.container}>
          <div className={styles.selected}>
            <div>
              send user:
              <br/>
            </div>              
              {selectedUser.map((e,idx) => {
                return <User removeUser={resetSentUser} username={e} key={idx} />
              })}

          </div>
          <div className={styles.intputGroup}>
            <div className={styles.text}>
              <textarea value={message} onChange={onChange}/>
            </div>
            <div tabIndex={0} onClick={e => set()}>
              <div className={styles.btn} >
                send
              </div>
            </div>
          </div>
      </div>
    );
  }
  
export default App;

