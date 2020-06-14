import React, { useState, useEffect } from 'react';
import styled from './Header.css'
import { History } from 'history';
import PATH from '../constants/routes.json'
import { Link } from 'react-router-dom';

import {AiOutlineHome,AiOutlineBook} from 'react-icons/ai'

type Props = {
  history: History;
};

function App({ history }: Props) {

    const goSetting = () => {
      history.push(PATH.SETTING)
    }

    return (
      <div className={styled.container} data-tid="container">
        <div className={styled.btn} title="home">
          <Link to="/group/1">
            <AiOutlineHome />
          </Link>
        </div>
        <div className={styled.btn} onClick={e => history.push(PATH.LOGS)} title="logs">
          <AiOutlineBook />
        </div>
      </div>
    );
  }
  
export default App;