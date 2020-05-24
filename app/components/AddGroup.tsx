import React, { useState, useEffect } from 'react';
import styles from './AddGroup.scss'

type Props = {
    focus: Function
};
  

function App({focus} : Props) {

    return (
        <div className={styles.container} title={"add Group"} onClick={e => focus()} >
            <i className="fas fa-plus"></i>
        </div>
    );
  }
  
export default App;