import React, { useState, useEffect } from 'react';
import styles from './UserSearch.scss'

type Props = {
    userList: any;
};


function App({userList}: Props) {
    console.log(userList)
    const [message, setMessage] = useState("test")

    const onChange = (evt: any) => {
        setMessage(evt.target.value)
    }

    const searchStart = (e: any) => {
        //init user list
        console.log("search start")
        console.log(userList)
    }

    const searchEnd = (e: any) => [
        // GC
        console.log("search end")
    ]

    return (
        <div className={styles.container} onMouseEnter={searchStart} onMouseLeave={searchEnd}  >
            <div>
                <span>
                    user search
                </span>
            </div>
            <input list="search" type="text" maxLength={16} value={message} onChange={onChange} autoComplete="off"/>
            <datalist id="search">
                {userList.map((user: any) => {
                    <option value={user.name}/>
                })}
            </datalist>
            <div className={styles.resultContainer}>
                {message}
            </div>
        </div>
    );
  }

export default App;
