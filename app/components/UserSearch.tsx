import React, { useState, useEffect } from 'react';
import styles from './UserSearch.css'

type Props = {
    userList: any;
};
  

function App({userList}: Props) {
    
    const [message, setMessage] = useState("test")

    const onChange = (evt: any) => {    
        setMessage(evt.target.value)
    }
    
    return (
        <div className={styles.container}>
            <div>
                <span>
                    user search
                </span>
            </div>
            <input list="search" type="text" maxLength={16} value={message} onChange={onChange} autoComplete="off"/>
            <datalist id="search">
                <option value="test"/>
            </datalist>
            <hr/>
        </div>
    );
  }
  
export default App;