import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.css'

import User from './UserCard'
import Message from './MessageCard'
import In from './Input'
import Search from './UserSearch'

type Props = {
  getUser: Function;
  getMessages: Function;
  sendMessage: Function;
  groupId: String
};


function App(props: Props) {
  const [sentuser, setsent] = useState([])
  const [search, setSearch] = useState("")
  const [userList, setuserList] = useState([])
  const [messages, setMessages] = useState([])
  const [inputext, setInputext] = useState("")

  const setSentUser = (username: String) => {

  }

  const searchUser = (username : String) => {

  }


  return (
    <div className={styles.container}>
      <div className={styles.userList}>
        <Search />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <div className={styles.dump}></div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.messagewrap}>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
          <div className={styles.dump}></div>
          <div className={styles.textwrap}>
          <In setText={setSearch}/>
          </div>

      </div>


    </div>
    );
  }
  
export default App;