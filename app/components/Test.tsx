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

const tempUser = [
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

const tempsentUser = [
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
  const [sentuser, setsent] = useState(tempsentUser)
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
    
    if(message === "") {
      return
    }

    console.log(message)

    if (props.groupId === "Default") {
      return
    }

  }

  const resetUser = (user: String) => {
    console.log("reset")
  }

  return (
    <div className={styles.container}>
      <div className={styles.userList}>
        <Search />
        {userList.map((e,idx) => {
          return <User addUser={addSentUser} key={idx} />
        })}
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