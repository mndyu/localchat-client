import React, { useState, useEffect } from 'react';
import styles from './UserSearch.css'

function App() {
    return (
        <li className={styles.container}>
            <span>
                user search
            </span>
            <input list="search" type="text" maxLength={16} autoComplete="off"/>
            <datalist id="search">
                <option value="test"/>
            </datalist>
            <hr/>
        </li>
    );
  }
  
export default App;