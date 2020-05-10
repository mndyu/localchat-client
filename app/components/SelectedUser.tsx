import React, { useState, useEffect } from 'react';
import styles from './SelectedUser.scss'

type Props = {
    username: any;
    removeUser: Function;
  };
  
function App({username, removeUser }: Props) {

    return (
      <div className={styles.container}>
        <div>
            {username.name}
          <span onClick={e => removeUser(username.name)}>
          &times;
          </span>
        </div>
      </div>
    );
  }
  
export default App;