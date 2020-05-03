import React, { useState, useEffect } from 'react';
import styles from './Input.css'
import Quill from 'react-quill'
import 'react-quill/dist/quill.global.css'; // ES6

function App() {
  
  return (
      <div className={styles.container}>
          <hr />
          <div className={styles.selected}>
              selected User:
          </div>
          <div className={styles.intputGroup}>
            <Quill />
          </div>
      </div>
    );
  }
  
export default App;