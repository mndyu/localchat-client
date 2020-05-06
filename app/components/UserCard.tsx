import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from './UserCard.css'

type Props = {
  addUser: Function;
};

// onlive icon add
function App({addUser}: Props) {
    return (
      <div className={styled.container} onClick={e => addUser("test1")}>
        my user
        <span className={styled.cap}>
          N
        </span>
      </div>
    );
  }
  
export default App;