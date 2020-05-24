import React, { useState, useEffect } from 'react';
import styled from './Group.css'

import Context from './GroupContext'

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
    <div className={current == id ? styled.root: ""} >
      <div tabIndex={0} onFocus={e => focus(id)} className={styled.container} onContextMenu={openContext}>
        my gorup
        <span className={styled.cap}>
          N
        </span>
        {
          open ?
          <Context X={pos.X} Y={pos.Y} close={setPos} />
          :
          null
        }
      </div>
    </div>
    );
  }
  
export default App;


/**
 * 
 *         {
          current == id ? 
          <div className={styled.fbar}></div>
          :
          null
        }

 */