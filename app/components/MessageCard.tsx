import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './MessageCard.css'

function App() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            user name
          </div>
          <div className={styles.time}>
            current time
          </div>          
          <div className={styles.info}>
            info
          </div>
        </div>
        <div className={styles.body}>
          message body
        </div>
        <div className={styles.unopen}>
          unreaded message
        </div>
      </div>
    );
  }
  
export default App;