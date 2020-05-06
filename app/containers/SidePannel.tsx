import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './SidePannel.css'
import { History } from 'history';

import Fetch from '../actions/Fetch'

import Group from '../components/Group'

type Props = {
  history: History;
};

const tempGroup = [
  {
    name: "test"
  },
  {
    name: "test"
  }
]

function App({history}: Props) {
  const [currnet, setCurrent] = useState(0)
  const [enterdGroup, setGroup] = useState([])
  
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const focus = (id: number) => {
    history.push("/group/" + id)
    setCurrent(id)
    forceUpdate()
  }

  const getGroup = () => {
    Fetch('/groups')
    .then(result => {
      console.log("groups", result)
      setGroup(result)})
    .catch(e => console.log(e))
  }

  useEffect(() => {
    // Your code here
    //getGroup()
  },[]);

  return (
      <div className={styles.container} data-tid="container">
        {enterdGroup.map((e,idx) => {
          return <div key={idx}>
              <Group id={idx} focus={focus} current={currnet}/>
            </div>
        })}
        <div className={styles.dump}></div>
      </div>
    );
  }
  
export default App;