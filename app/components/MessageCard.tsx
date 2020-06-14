import React, { useState, useEffect } from 'react';
import styles from './MessageCard.scss'
import {markdown} from 'markdown';

import { makeStyles, Theme, createStyles, styled } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Thread from './MessageThread'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: '#67A730',
    },
    drawer: {
      width: '50%'
    },
  }),
);


type Props = {
  message: any
};
// UI concept -> Post Cart | Hagaki
function App({message}: Props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(message.flag);
  const [open, setOpen] = useState(false)

  const closeDrawer = () => {
    setOpen(false)
  }

  const getTime = () => {
    return new Date().toLocaleString()
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const openThread = () => {
    setOpen(true)
  }

    return (
      <div className={styles.container}>
          <Drawer classes={{paper: classes.drawer,}} anchor={'right'} open={open} onClose={closeDrawer}>
            <Thread id={message.id}/>
          </Drawer>        
        <Box boxShadow={3}>
          <Card className={classes.root} >
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {message.From[0]}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings" onClick={openThread} >
                <MenuIcon />
              </IconButton>
            }
            title={message.From}
            subheader={message.date ? message.send_date : getTime()}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              message info
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            </IconButton>
            <IconButton aria-label="share">
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <i className="fas fa-chevron-down"></i>
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph component={'span'} variant={'body2'}>
                <div dangerouslySetInnerHTML={{__html: markdown.toHTML(message.text ? message.text : "Hello *World*!" )}}/>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        </Box>
      </div>

    );
  }
  
export default App;
