import React, { useState, useEffect } from 'react';
import styles from './Userinfo.css'
  
function App() {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                user name change
            </div>
            <div className={styles.span} >
                username
            </div>
            <div>
                <input maxLength={16} type="text"/>
                <input type="button" value="send"/>
            </div>
        </div>
    );
  }
  
export default App;