import React, { useState, useEffect } from 'react';
import styles from './Log.css'

function App() {
    return (
      <div className={styles.container}>
      <div className={styles.userList}>
        <div>
          <div>
            <input type="radio" id="name" name="drone" value="name"
                  defaultChecked/>
            <label>Name</label>
          </div>

          <div>
            <input type="radio" id="date" name="drone" value="date"/>
            <label>Date</label>
          </div>
        </div>
      <div>
        <details>
          <summary>20190204</summary>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </details>
        <details>
          <summary>20190204</summary>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </details>
        <details>
          <summary>20190204</summary>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </details>
        <details>
          <summary>20190204</summary>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </details>
        <details>
          <summary>20190204</summary>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </details>
        <details>
          <summary>20190204</summary>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </details>
        <details>
          <summary>20190204</summary>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </details>
      </div>

      </div>

      <div className={styles.contentContainer}>
        test
      </div>

    </div>
    );
  }
  
export default App;