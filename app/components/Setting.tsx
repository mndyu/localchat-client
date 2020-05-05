import React, { useState, useEffect } from 'react';
import styles from './Setting.css'

function App() {
    return (
        <div className={styles.container}>
        <div>
          create group need user select
        </div>
        <div>group invite</div>
        <div>group dismiss</div>
        <div>
          user info setting
          <div>
            <span>
              user name
            </span>
            <input type="text"/>
          </div>
        </div>
      </div>
    );
  }
  
export default App;