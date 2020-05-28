import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './UserSearch.scss'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ChangeEvent } from 'react';

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

    const test = (e: ChangeEvent, value: any) => {
        console.log(value)
    }
    
    return (
        <div className={styles.box}>
            <Autocomplete
                autoHighlight
                getOptionLabel={(option) => option.name}
                options={userList}
                onChange={test}                
                renderInput={(params :any) => <TextField {...params} label="Search" variant="outlined" />}
            />
        </div>
        );
  }

export default App;
