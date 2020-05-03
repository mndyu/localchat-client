import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.css'

import User from './UserCard'
import Message from './MessageCard'
import In from './Input'

function App() {
    return (
      <div className={styles.container}>
        <div className={styles.userList}>
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

          <div className={styles.input}>
            <In />
          </div>

        </div>

      </div>
    );
  }
  
export default App;