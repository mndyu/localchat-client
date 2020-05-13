import React, { useState, useEffect } from 'react';
import styles from './SelectedUser.scss'
import {AiOutlineMenu } from 'react-icons/ai'

type Props = {
    username: any;
    removeUser: Function;
  };
  
function App({username, removeUser }: Props) {

  return (
      <div className={styles.container}>
        <div>
            {username.name}
          <span className={styles.close} onClick={e => removeUser(username)}>
            <AiOutlineMenu />
          </span>
        </div>
      </div>
    );
  }
  
export default App;