import React, { useState, useEffect } from 'react';
import styles from './UserSearch.scss'

type Props = {
    userList: any;
};


function App({userList}: Props) {

    const [message, setMessage] = useState("test")

    const onChange = (evt: any) => {
        setMessage(evt.target.value)
    }

    const searchStart = (e: any) => {
        //init user list
        console.log("search start")
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
            <input list="search" type="text" maxLength={16} value={message} onChange={onChange} autoComplete="on"/>
            <datalist id="search">
<<<<<<< HEAD
                <option value="test" onClick={(e) => console.log("clieck")} />
                <option value="test" onClick={(e) => console.log("clieck")} />
                <option value="test" onClick={(e) => console.log("clieck")} />
                <option value="test" onClick={(e) => console.log("clieck")} />
=======
                {userList.map((user: any, index: any) => {
                    return <option value={user.name} key={index}/>
                })}
>>>>>>> 39ff0e93624fdf9c985ddb7a715e9f0fbf8d07bc
            </datalist>
        </div>
        );
  }

export default App;
