import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from './UserCard.css'

function App() {
    return (
      <div className={styled.container}>
        my user
        <span className={styled.cap}>
          N
        </span>
      </div>
    );
  }
  
export default App;