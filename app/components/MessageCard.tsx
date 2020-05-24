import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './MessageCard.scss'
import {markdown} from 'markdown';

import { makeStyles, Theme, createStyles, styled } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

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
      backgroundColor: red[500],
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

  const getTime = () => {
    return new Date().toLocaleString()
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
      <div className={styles.container}>
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {message.name[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <i className="fas fa-ellipsis-v"></i>
            </IconButton>
          }
          title={message.name}
          subheader={message.date ? message.date : getTime()}
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
            <Typography paragraph>
              {message.body}
              <div dangerouslySetInnerHTML={{__html: markdown.toHTML( "Hello *World*!" )}}/>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </div>

    );
  }
  
export default App;

/*

      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            {message.name}
          </div>
          <div className={styles.time}>
            {message.date ? message.date : getTime()}            
          </div>          
          <div className={styles.info}onClick={(e) => setInfo(!info)}>
            info
          </div>
        </div>
        {
          info ? 
          <div className={styles.subheader}>
            <div>
              open flag:false
            </div>
            <div>
              opentime:{getTime()}
            </div>
            <div>
               sendtime:{getTime()}
            </div>
          </div>
          :
          null
        }
        {opened ? 
        <div className={styles.body}>
          {message.body}
          <div dangerouslySetInnerHTML={{__html: markdown.toHTML( "Hello *World*!" )}}/>
        </div>        
        :
        <div className={styles.unopen} onClick={e => openMessage()}>
          Read Message Click Here

        </div>        
        }
      </div>




*/