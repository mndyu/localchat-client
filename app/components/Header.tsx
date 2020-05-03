import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from './Header.css'
import { History } from 'history';
import PATH from '../constants/routes.json'

type Props = {
  history: History;
};


function App({ history }: Props) {
  console.log(history)

    return (
      <div className={styled.container} data-tid="container">
        <div onClick={e => history.push("/")}>
          home
        </div>
        <div onClick={e => history.push("/logs")}>
          logs
        </div>
        <div onClick={e => history.push("/setting")}>
          setting
        </div>
      </div>
    );
  }
  
export default App;