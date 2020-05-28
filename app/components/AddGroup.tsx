import React, { useState, useEffect } from 'react';
import styles from './AddGroup.scss'
import Avatar from '@material-ui/core/Avatar';
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';

type Props = {
    focus: Function
};

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    display: 'flex',
  },
}),
);


function App({focus} : Props) {
    const classes = useStyles();

    return (
        <div className={styles.container} title={"add Group"} onClick={e => focus()} >
            <div className={classes.root}>
                <Avatar>
                    <i className="fas fa-plus"></i>
                </Avatar>
            </div>
        </div>
    );
  }
  
export default App;