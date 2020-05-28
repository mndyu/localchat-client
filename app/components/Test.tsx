import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Test.scss'
import { History } from 'history';
import { match } from 'react-router'

import User from './UserCard'
import Message from './MessageCard'
import In from './Input'
import Search from './UserSearch'

import noti from '../actions/noti'
import Fetch from '../actions/Fetch'

import Header from './Header'
import Side from '../containers/SidePannel'

import WellCome from './WellCome'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Fab from '@material-ui/core/Fab';

// https://material-ui.com/components/lists/#simple-list

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
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  },
  {
    From: "test"
  }
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
    },
    user: {
      height: '2.3rem',
      textAlign: 'center',
    }
  }),
);

function App(props: Props) {
  const classes = useStyles();

  const [sentuser, setsent] = useState<Array<String> | null>([])
  const [search, setSearch] = useState("")
  const [userList, setuserList] = useState(tempUser)
  const [messages, setMessages] = useState([])
  const [inputext, setInputext] = useState("")

  let target: HTMLDivElement | null;
  // forced re rendering
  // https://stackoverflow.com/questions/53215285/how-can-i-force-component-to-re-render-with-hooks-in-react
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const addSentUser = (username: string) => {

    let dump = {name: username}
    let flag = false;

    sentuser.forEach((e: any) => {
      if(e.name === username)  {
        flag = true;
        return
      }
    })

    if (!flag) {
      sentuser.push(dump)
      setsent(sentuser)
      forceUpdate()  
    }

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

  const resetUser = (user: any) => {

    let result = []

    sentuser.forEach((e:any) => {
      if(user.name !== e.name) {
        result.push(e)
      }
    })

    setsent(result)
    forceUpdate()
  }

  const getMountData = (gid: string) => {
    console.log("set data", gid)

    Fetch('/users')
    .then(result => {
      console.log(result)
      setuserList(result)})
    .catch(e => console.log(e))

    setMessages(tempBody)

  }

  //https://qiita.com/k-penguin-sato/items/9373d87c57da3b74a9e6
  useEffect(() => {
    // init page use data
    setsent([])
    setSearch("")
    setInputext("")
    setMessages(tempBody)
    // get group info
    //getMountData("")
  },[props.match.params.gid]);

  const scrollToBottom = () => {
    //messagesEndRef.current.scrollIntoView({ behavior: "smooth" }) 
    //console.log(target.scrollHeight)
    //target.scrollBy({top: target.scrollHeight})
    target.scrollTo({
      top: target.scrollHeight,
      behavior: "smooth"
    })
  }

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    // delay mount func
    const timer = setTimeout(() => {
      scrollToBottom()
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.rootcontainer}>
      <div className={styles.header}>
        <Header history={props.history} />
      </div>

      <div className={styles.body}>
        <div className={styles.d1}>
          <Side history={props.history} />
        </div>
        <div className={styles.d2}>
          <div className={styles.container}>
            <div className={styles.userList}>
              <div>　
                <Search userList={userList} />
              </div>
              <div className={styles.usercont}>
                <List component="nav" aria-label="main mailbox folders">
                {userList.map((e,idx) => {
                  return <ListItem className={classes.user} button key={idx}>  
                    <User name={e.name}  addUser={addSentUser} key={idx} />
                  </ListItem>
                })}
                </List>
              </div>
            </div>

            <div className={styles.contentContainer}>
              <div className={styles.goBottom} onClick={e => scrollToBottom()}>
                <Fab className={classes.icon}  aria-label="add">
                <i className="fas fa-arrow-down"></i>
                </Fab>
              </div>
              
                <div ref={el => target = el} className={styles.messagewrap}>
                  {messages.map((e,idx) => {
                    return <Message message={e} key={idx} />
                  })}
                </div>
                <div></div>
              <div className={styles.textwrap}>
                <In selectedUser={sentuser} resetUser={resetUser} setText={sendMessage}/>
              </div>
            </div>
          </div>     

      </div>

      </div>
    </div>
    );
  }

export default App;
/**
 * 
 * 
 *             <Modal>
              <WellCome />
            </Modal>

 */