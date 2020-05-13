import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from './UserCard.scss'

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
        <span>
          user name
        </span>
        <div className={styled.cap}>
          99
        </div>
      </div>
    );
  }
  
export default App;