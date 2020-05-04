import React, { useState, useEffect } from 'react';
import styles from './Input.css'
import Quill from 'react-quill'
import './Input.global.css'; // ES6


const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]

function App() {

  var editor : Quill;
  
  const setInit = (ed: Quill) => {
    editor = ed;
    console.log(editor)
  }

  return (
      <div className={styles.container}>
          <hr />
          <div className={styles.selected}>
              selected User:
          </div>
          <div className={styles.intputGroup}>
            <div>
              <Quill ref={(el) => el !== null ? setInit(el) : console.log("not assign text")} modules={modules} formats={formats} />
            </div>
            <div>
              <div className={styles.btn} onClick={e => console.log(editor.props)}>
                send
              </div>
            </div>
          </div>
      </div>
    );
  }
  
export default App;