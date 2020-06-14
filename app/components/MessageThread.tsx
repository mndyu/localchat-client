import React, { ReactNode, useState, useEffect } from 'react';

import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import styles from './MessageThread.scss'
import { makeStyles, Theme, createStyles, styled } from '@material-ui/core/styles';


type Props = {
    id: number
};
    
const temp_message = {
    from: "test user",
    send_at: "2020/06/10",
    message: "test message",
    
}

const temp_thread = [
    {
        From: "test user",
        create_at: "test time",
        body: "test body"
    },
    {
        From: "test user",
        create_at: "test time",
        body: "test body"
    },
    {
        From: "test user",
        create_at: "test time",
        body: "test body"
    },
    {
        From: "test user",
        create_at: "test time",
        body: "test body"
    },
    {
        From: "test user",
        create_at: "test time",
        body: "test body"
    },
    {
        From: "test user",
        create_at: "test time",
        body: "test body"
    },
    {
        From: "test user",
        create_at: "test time",
        body: "test body"
    },
]


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    caption: {
        marginLeft: "10px"
    },
    inline: {
        display: 'inline',
      },
  
  }),
);


function App({id}: Props) {
    const classes = useStyles();

    useEffect(() => {
        console.log(id)
        // get message from id 
        // get thread from message id
    }, [id]);


    return (
        <div>
            <div className={styles.message}>
            <Typography variant="subtitle1" display="inline">
                h6. Heading
            </Typography>
            <Typography className={classes.caption} variant="caption" display="inline">
                caption text
            </Typography>

            <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
        
            </div>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">

                {temp_thread.map((thread, idx) => {
                    return <ListItemText
                    key={idx}
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                })}
            </List>                
        </div>
    );
  }
  
export default App;

/**
 * 




 */