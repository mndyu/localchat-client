import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from './UserCard.scss'
import Badge from '@material-ui/core/Badge';
import { Typography } from '@material-ui/core';

type Props = {
  addUser: Function;
  name: string
};

// onlive icon add
function App({addUser, name}: Props) {
  
    return (
      <div className={styled.container} onClick={e => addUser(name)}>
        <div className={styled.live}>
        </div>
        <Badge badgeContent={2} color="error">
          <Typography variant="button" display="block" gutterBottom>
            user name
          </Typography>
        </Badge>
      </div>
    );
  }
  
export default App;