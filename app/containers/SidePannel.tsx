import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './SidePannel.css'
import { History } from 'history';

import Fetch from '../actions/Fetch'

import Group from '../components/Group'
import AddG from '../components/AddGroup'

type Props = {
  history: History;
  groups: any;
};

function App({history, groups}: Props) {
  const [currnet, setCurrent] = useState(0)
  const [enterdGroup, setGroup] = useState([])
  
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const focus = (id: number) => {
    history.push("/group/" + id)
    setCurrent(id)
    forceUpdate()
  }

  const addGroup = () => {
    history.push("/groupselect")
    forceUpdate()
  }

  useEffect(() => {
    // init page use data
    setGroup(groups)
  },[groups]);

  return (
      <div className={styles.container} data-tid="container">
        {enterdGroup.map((e,idx) => {
          return <div key={idx}>
              <Group id={idx} focus={focus} current={currnet}/>
            </div>
        })}
          <AddG focus={addGroup}/>
      </div>
    );
  }
  
export default App;