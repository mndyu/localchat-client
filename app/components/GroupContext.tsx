import React, { useState, useEffect } from 'react';
import styles from './GroupContext.scss'

type Props = {
    X: number,
    Y: number,
    close: any,
  };
  
function App({X,Y, close}: Props) {

    const closeContext = () => {
        close(false)
    }    

    return (
      <div className={styles.container} style={{
          top: Y,
          left: X
      }}
        onMouseLeave={closeContext}
      >
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
      </div>
    );
  }
  
export default App;