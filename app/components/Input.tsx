import React, { useState, useEffect } from 'react';
import styles from './Input.css'
import User from './SelectedUser'
//https://github.com/sparksuite/simplemde-markdown-editor
import  SimpleMDE from 'simplemde'

type Props = {
  setText: Function;
  selectedUser: any;
  resetUser: Function;
};

function App({setText, selectedUser, resetUser}: Props ) {
  const [message, setMessage] = useState("test")

  let text: any = null;
  let simple;

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

  useEffect(() => {
    // Your code here
    console.log(text)
    simple = new SimpleMDE({element: text})
  },[]);


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
              <textarea ref={el => text = el}/>
            </div>
          </div>
          <div>
          </div>
      </div>
    );
  }
  
export default App;

