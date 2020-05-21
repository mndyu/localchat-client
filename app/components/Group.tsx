import React, { useState, useEffect } from 'react';
import styled from './Group.css'

type Props = {
  id: number
  focus: Function
  current : number
};

function App({id, focus,current}: Props) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState({})

  const openContext = (e: any) => {
    e.preventDefault()
    e = e || window.event;

    setPos({X: e.pageX, Y:e.pageY})
    setOpen(!open)
  }

  return (
      <div tabIndex={0} onFocus={e => focus(id)} className={styled.container} onContextMenu={openContext}>
        {
          current == id ? 
          <div className={styled.fbar}></div>
          :
          null
        }
        my gorup
        <span className={styled.cap}>
          N
        </span>
      </div>
    );
  }
  
export default App;