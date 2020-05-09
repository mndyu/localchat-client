import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from './UserCard.scss'

type Props = {
  addUser: Function;
};

// onlive icon add
function App({addUser}: Props) {
    return (
      <div className={styled.container} onClick={e => addUser("test1")}>
        <div className={styled.live}>
        </div>
        <span>
          user name
        </span>
        <span className={styled.cap}>
          N
        </span>
      </div>
    );
  }
  
export default App;