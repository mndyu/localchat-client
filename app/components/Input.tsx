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
  const [message, setMessage] = useState("")

  let text: any = null;
  let simple: SimpleMDE;
  let mes = "";

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
      autoDownloadFontAwesome: false,
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
        'link',
        '|',
        'preview',
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

    //console.log(simple)
    simple.codemirror.addKeyMap({"Cmd-Enter": sendText})
    simple.codemirror.addKeyMap({"Ctrl-Enter": sendText})
    // set MaxLength
    simple.codemirror.on("change",() => {
      if (simple.value().length < 501) {        
        mes = simple.value()
      } else {
        simple.value(mes)
      }
    })
  },[]);


  return (
      <div className={styles.container}>
          <div className={styles.selected}>
            <div>
              send user:
              <br/>
            </div>
            <div className={styles.sconatiner}>
              {selectedUser.map((e: any,idx: number) => {
                return <User removeUser={resetSentUser} username={e} key={idx} />
              })}
            </div>
          </div>
          <div className={styles.intputGroup}>
            <div>
              <textarea  ref={el => text = el}/>
            </div>
          </div>
      </div>
    );
  }
  
export default App;
