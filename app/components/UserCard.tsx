import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from './UserCard.scss'
import Badge from '@material-ui/core/Badge';
import { Typography } from '@material-ui/core';

type Props = {
  addUser: Function;
  el: any
};

// onlive icon add
function App({addUser, el}: Props) {
  
    return (
      <div className={styled.container} onClick={e => addUser(el)}>
        <div className={styled.live}>
        </div>
        <Badge badgeContent={2} color="error">
          <Typography variant="button" display="block" gutterBottom>
            {el.name}
          </Typography>
        </Badge>
      </div>
    );
  }
  
export default App;