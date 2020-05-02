import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './SidePannel.css'

import Group from '../components/Group'

function App() {
    return (
      <div className={styles.container} data-tid="container">
        my side
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
      </div>
    );
  }
  
export default App;