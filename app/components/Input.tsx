import React, { useState, useEffect } from 'react';
import styles from './Input.scss'
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
  let simple: SimpleMDE;

  const resetSentUser = (username: String) => {
    console.log("exit")
    resetUser(username)
  }

 const sendText = (e: any) => {
    if(simple.value() === "" ) { 
        console.log("none text")
        return
    }

    setText(simple.value())
    simple.value("")
 }

  useEffect(() => {
    // Your code here
    simple = new SimpleMDE({
      element: text,
      autosave: {
          enabled: true,
          uniqueId: "GroupChat",
          delay: 1000,
      },
      toolbar: [
        'bold',
        'italic',
        'heading',
        '|',
        'quote',
        'unordered-list',
        'ordered-list',
        '|',
        'link',
        '|',
        'preview',
        'side-by-side',
        'fullscreen',
        '|',
        'guide',    
        '|',
        {
          name: "sendText",
          action: sendText,
          className: "fa fa-star", // Look for a suitable icon
          title: "send Text (Ctr/Cmd-Enter)",
        },
      ],
      status: ["autosave", "lines", "words", "cursor"], 
    })

    console.log(simple)

    simple.codemirror.addKeyMap({"Cmd-Enter": sendText})
    simple.codemirror.addKeyMap({"Ctrl-Enter": sendText})

  },[]);


  return (
      <div className={styles.container}>
          <div className={styles.selected}>
            <div>
              send user:
              <br/>
            </div>
              {selectedUser.map((e: any,idx: number) => {
                return <User removeUser={resetSentUser} username={e} key={idx} />
              })}
          </div>
          <div className={styles.intputGroup}>
            <div>
              <textarea ref={el => text = el}/>
            </div>
          </div>
      </div>
    );
  }
  
export default App;
