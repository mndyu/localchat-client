import React, { useState, useEffect } from 'react';
import styled from './Group.css'

import Context from './GroupContext'
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Badge from '@material-ui/core/Badge';

// https://material-ui.com/components/avatars/
// https://material-ui.com/components/badges/
type Props = {
  id: number
  focus: Function
  current : number
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }),
);



function App({id, focus,current}: Props) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState({})
  const classes = useStyles();

  const openContext = (e: any) => {
    e.preventDefault()
    e = e || window.event;

    setPos({X: e.pageX, Y:e.pageY})
    setOpen(!open)
  }

  

  return (
    <div className={current == id ? styled.root: ""} >
      <div tabIndex={0} onFocus={e => focus(id)} className={styled.container} onContextMenu={openContext}>
        <div className={classes.root}>
        <Badge badgeContent={1} color="primary">
          <Avatar>
            my gorup
          </Avatar>
        </Badge>
          {
            open ?
            <Context X={pos.X} Y={pos.Y} close={setPos} />
            :
            null
          }
        </div>
      </div>
    </div>
    );
  }
  
export default App;


/**
 * 
 *         {
          current == id ? 
          <div className={styled.fbar}></div>
          :
          null
        }

 */