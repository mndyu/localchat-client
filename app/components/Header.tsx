import React, { useState, useEffect } from 'react';
import styled from './Header.css'
import { History } from 'history';
import PATH from '../constants/routes.json'

type Props = {
  history: History;
};

function App({ history }: Props) {

    return (
      <div className={styled.container} data-tid="container">
        <div className={styled.btn} onClick={e => history.push(PATH.HOME)}>
          home
        </div>
        <div className={styled.btn} onClick={e => history.push(PATH.LOGS)}>
          logs
        </div>
        <div className={styled.btn} onClick={e => history.push(PATH.SETTING)}>
          setting
        </div>
      </div>
    );
  }
  
export default App;