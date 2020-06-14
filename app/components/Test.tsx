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

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Fab from '@material-ui/core/Fab';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import UserType from '../types/user'

// https://material-ui.com/components/lists/#simple-list

type Props = {
  getUser: Function;
  getMessages: Function;
  sendMessage: Function;
  groupId: number;
  history: History;
  match: match;

  openSocket: () => void;
  closeSocket: () => void;
};

const tempBody = [
  {
    id: 12,
    From: "test",
    To: "test to",
    create_at: "test time"
  },
  {
    id: 12,
    From: "test",
    To: "test to",
    create_at: "test time"
  },
  {
    id: 12,
    From: "test",
    To: "test to",
    create_at: "test time"
  },
  {
    id: 12,
    From: "test",
    To: "test to",
    create_at: "test time"
  },
  {
    id: 12,
    From: "test",
    To: "test to",
    create_at: "test time"
  },
  {
    id: 12,
    From: "test",
    To: "test to",
    create_at: "test time"
  },
  {
    id: 12,
    From: "test",
    To: "test to",
    create_at: "test time"
  },
  {
    id: 12,
    From: "test",
    To: "test to",
    create_at: "test time"
  },
  {
    id: 12,
    From: "test",
    To: "test to",
    create_at: "test time"
  },
  {
    id: 12,
    From: "test",
    To: "test to",
    create_at: "test time"
  },
  {
    id: 12,
    From: "test",
    To: "test to",
    create_at: "test time"
  },
  {
    id: 12,
    From: "test",
    To: "test to",
    create_at: "test time"
  },
  {
    id: 12,
    From: "test",
    To: "test to",
    create_at: "test time"
  },

]

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
    },
    user: {
      height: '2.3rem',
      textAlign: 'center',
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

function App(props: Props) {
  const classes = useStyles();

  const {openSocket, closeSocket} = props;
  const [user, setUser] = useState<UserType|null>(null);
  const [sentuser, setsent] = useState<Array<any> | null>([])
  const [search, setSearch] = useState("")
  const [userList, setuserList] = useState([])
  const [messages, setMessages] = useState([])
  const [groups, setGroups] = useState([])
  const [inputext, setInputext] = useState("")
  const [info, setInfo] = useState(false)
  const [loading, setLoading] = useState(true)  

  // if get value in function, must use useRef
  const testref = useRef<UserType|null>()
  const sendRef = useRef<Array<any>|null>()
  
  let target: HTMLDivElement | null;
  // forced re rendering
  // https://stackoverflow.com/questions/53215285/how-can-i-force-component-to-re-render-with-hooks-in-react
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  function addSentUser (el: any) {

    let flag = false;

    sentuser.forEach((e: any) => {
      if(e.id === el.id)  {
        flag = true;
        return
      }
    })

    if (!flag) {
      sentuser.push(el)
      setsent(sentuser)
      forceUpdate()  
    }
  }

  function sendMessage(message: string) {

    //noti()
    sendMeg(message)

    if (props.groupId == 0) {
      return
    }

  }

  function resetUser  (el: any) {

    let result = [];

    sentuser.forEach((e:any) => {
      if(el.id !== e.id) {
        result.push(e)
      }
    })

    setsent(result)
    forceUpdate()
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setInfo(false);
  };

  const closeLoading = () => {
    setLoading(false)
  }

  const scrollToBottom = () => {
    //messagesEndRef.current.scrollIntoView({ behavior: "smooth" }) 
    //console.log(target.scrollHeight)
    //target.scrollBy({top: target.scrollHeight})
    target ? target.scrollTo({
      top: target.scrollHeight,
      behavior: "smooth"
    }) : null
  }

  async function checkServer() {
    try {
      let response = await Fetch('/ping')

      return response['time'] ? true : false
    }
    catch (e) {
      setInfo(true)
    }
  }

  async function checkUser() {
    try {
      let response = await Fetch('/profile')

      return response['message'] ? false : response
    }
    catch (e) {
      setInfo(true)
    }
  }

  async function createUser() {
    try {
      let response = await Fetch('/users','POST', {
        name: process.env['USER'],
        pc_name: process.env['USER']
      })

      return response
    }
    catch (e) {
      setInfo(true)
    }
  }

  async function getGroup(id: number) {
    try {
      let response = await Fetch(`/users/${id}/groups`)

      return response
    }
    catch (e) {
      setInfo(true)
      console.log("error")
    }
  }

  async function enterGroup(gid: number, uid: number) {
    try {
      let response = await Fetch(`/groups/${gid}/members`,'POST', {
        user_id: uid,
        myself: false
      })

      console.log(response)
      return response
    }
    catch (e) {
      setInfo(true)
      console.log("error")
    }
  }

  async function getGroupUserList(gid: number) {
    try {
      let response = await Fetch(`/groups/${gid}/members`)

      return response
    }
    catch (e) {
      setInfo(true)
      console.log("error")
    }
  }

  async function getGroupUserMessage() {
    try {
      let response = await Fetch('/groups/gid/users/uid/message')

      console.log(response)
      return response
    }
    catch (e) {
      setInfo(true)
    }
  }

  const sendMeg = (body: string) => {

//    console.log(sendRef.current)
    let gid = props.match.params['gid'] ? props.match.params['gid'] : 1;
    let sendlist = []
    sendRef.current?.forEach(e => {
      sendlist.push(e.id)
    })

    if (!sendlist.length) {
      // not set send user
      return
    }

    try {
      let response = Fetch(`/groups/${gid}/messages`,'POST', {
        to: sendlist,
        body: body
      })

      response.then(result => console.log(result))
      setsent([])
      return response
    }
    catch (e) {
      setInfo(true)
    }
  }

  async function componentMount() {
    try {
      if (await checkServer()) {
        let result = await checkUser()
        if (!result) {
          result = await createUser()

          await enterGroup(1,result.id)
        } 
        setUser(result)

        // get group list
        result = await getGroup(result.id)
        setGroups(result)

        // get user list
        result = await getGroupUserList(1);
        setuserList(result) 

        // get group messages


      }
    }
    catch (e) {
      setInfo(true)

      console.log("error")
    }
    closeLoading()
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

    console.log(props.match)

  },[props.match.params.gid]);

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {testref.current = user}, [user]);

  useEffect(() => {sendRef.current = sentuser}, [sentuser]);

  useEffect(() => {
    // delay mount func
    /*
    const socket = new WebSocket('ws://133.167.108.162:18000/api/v1/ws');
    socket.addEventListener('open', function (event) {
      socket.send('Hello Server!');
    });
    */
    //openSocket()
    //closeSocket()
    //console.log(process.env['USER'])
    componentMount()

    const timer = setTimeout(() => {
      scrollToBottom()
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.rootcontainer}>

      <Backdrop className={classes.backdrop} open={loading} onClick={closeLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar open={info} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
          retry connect
        </Alert>
      </Snackbar>


      <div className={styles.header}>
        <Header history={props.history} />
      </div>

      <div className={styles.body}>
        <div className={styles.d1}>
          <Side groups={groups} history={props.history} />
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
                    <User el={e}  addUser={addSentUser} key={idx} />
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
