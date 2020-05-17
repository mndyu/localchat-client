import React, { useState, useEffect } from 'react';
import styles from './WellCome.scss'
  
import Fetch from '../actions/Fetch'

/*
flow:
    check saved server ping
    if not, input server ip addr
        and check valid server
        if not, not found server message
    not, not found server message
*/
function App() {

    return (
        <div className={styles.container}>
            <div>
                Server Search
            </div>
            <div>
                Searching..
            </div>
            <div>
                <span>ip addr</span>
                <input type="text" />
                <input type="submit" />
            </div>
            <div>
                Not Found
            </div>
       </div>
    );
}
  
export default App;