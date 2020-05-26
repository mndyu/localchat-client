import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './UserSearch.scss'
import Input from '@material-ui/core/Input';

// https://material-ui.com/components/autocomplete/

type Props = {
    userList: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

function App({userList}: Props) {
    const classes = useStyles();
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
                {userList.map((user: any, index: number) => {
                    return <option value={user.name} key={index}/>
                })}
            </datalist>
        </div>
        );
  }

export default App;
