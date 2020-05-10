import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.css'
import { History } from 'history';
import { match } from 'react-router'

import User from './UserCard'
import Message from './MessageCard'
import In from './Input'
import Search from './UserSearch'

import noti from '../actions/noti'
import Fetch from '../actions/Fetch'

type Props = {
  getUser: Function;
  getMessages: Function;
  sendMessage: Function;
  groupId: number;
  history: History;
  match: match;
};

const tempUser = [
  {
    name: "user1"
  },
  {
    name: "user2"
  },
  {
    name: "user3"
  },
  {
    name: "tttt"
  },
  {
    name: "abcd"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  },
  {
    name: "user"
  }
]

const tempBody = [
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  },
  {
    name: "test"
  }
]

function App(props: Props) {

  const [sentuser, setsent] = useState([])
  const [search, setSearch] = useState("")
  const [userList, setuserList] = useState(tempUser)
  const [messages, setMessages] = useState(tempBody)
  const [inputext, setInputext] = useState("")

  // forced re rendering
  // https://stackoverflow.com/questions/53215285/how-can-i-force-component-to-re-render-with-hooks-in-react
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const addSentUser = (username: string) => {
    let dump = {name: username}
    sentuser.push(dump)
    setsent(sentuser)
    forceUpdate()
  }

  const searchUser = (username : String) => {

  }

  const sendMessage = (message: string) => {

    noti()
    if(message === "") {
      return
    }

    console.log(message)

    if (props.groupId == 0) {
      return
    }

  }

  const resetUser = (user: String) => {
    console.log("reset")
  }

  const getMountData = (gid: string) => {
    console.log("set data", gid)
    setMessages([])

    Fetch('/users')
    .then(result => {
      console.log(result)
      setuserList(result)})
    .catch(e => console.log(e))

  }

  //https://qiita.com/k-penguin-sato/items/9373d87c57da3b74a9e6
  useEffect(() => {
    // init page use data
    setsent([])
    setSearch("")
    setInputext("")

    // get group info
    //getMountData("")

  },[props.match.params.gid]);


  return (
    <div className={styles.container}>
      <div className={styles.userList}>
        <Search userList={userList} />
        <div className={styles.usercontainer} >
          {userList.map((e,idx) => {
            return <User addUser={addSentUser} key={idx} />
          })}
        </div>
        <div className={styles.dump}></div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.messagewrap}>
          {messages.map((e,idx) => {
            return <Message message={e} key={idx} />
          })}
          <div className={styles.dump}></div>
        </div>
            <div className={styles.textwrap}>
              <In selectedUser={sentuser} resetUser={resetUser} setText={sendMessage}/>
            </div>
        </div>
      </div>
    );
  }

export default App;
