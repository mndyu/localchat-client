import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './UserSearch.scss'
import Input from '@material-ui/core/Input';
import Autocomplete from '@material-ui/lab/Autocomplete';

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
    const [value, setValue] = React.useState<string | null>();
    const [opt, setOpt] = useState([])

    const converList = (l: any) => {

        let temp = []

        for (var i in  l) {
            temp.push(l[i].name)
        }

        setOpt(temp)
    }

    useEffect(() => {
        converList(userList)
    }, [userList]);
    

    return (
        <div className={styles.container} >
            <div>
                <Autocomplete
                    value={value}
                    onChange={(event: any, newValue: string | null) => {
                        setValue(newValue);
                    }}
                    options={opt}
                    style={{ width: 300 }}
                    renderInput={(params :any) => <TextField {...params} label="user" variant="outlined" />}
                />


            </div>
        </div>
        );
  }

export default App;
