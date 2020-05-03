import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.css'

import User from './UserCard'
import Message from './MessageCard'

function App() {
    return (
      <div className={styles.container}>
        <div className={styles.userList}>
          user list
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          <User />
          
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.wrapper}>
          message body
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          </div>
        </div>
      </div>
    );
  }
  
export default App;