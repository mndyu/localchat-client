import React, { useState, useEffect } from 'react';
import styled from './Group.css'

type Props = {
  id: number
  focus: Function
  current : number
};

function App({id, focus,current}: Props) {

  return (
      <div tabIndex={0} onFocus={e => focus(id)} className={styled.container}>
        my gorup
        <span className={styled.cap}>
          N
        </span>
        {
          current == id ? 
          <span className={styled.fbar}>|</span>
          :
          null
        }
      </div>
    );
  }
  
export default App;