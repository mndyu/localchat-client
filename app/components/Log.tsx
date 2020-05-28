import 'date-fns';
import jaLocale from "date-fns/locale/ja";
import React, { useState, useEffect } from 'react';
import styles from './Log.css';
import MessageCard from './MessageCard';
import { Message } from '../types/message';

import Header from './Header'
import { TextField, ExpansionPanelDetails } from '@material-ui/core';

import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import DateFnsUtils from '@date-io/date-fns';

import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type Props = {
  history: History;
};

function App(props: Props) {
  interface Log {
    date?: string;
    message?: Message;
  }

  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [date, setDate] = useState<Date|null>(null);
  const [message, setMessage] = useState(null);
  const [displayLogs, setDisplayLogs] = useState<Log[]>([]);

  var messages: Message[] = [
    {
      id: 1,
      From: 'Tom',
      To: 'Bob',
      gid: 1000,
      text: 'test message1!',
      flag: true,
      send_date:'2020/5/10 12:00:00',
      open:'2020/5/10 21:14:37'
    },
    {
      id: 2,
      From: 'Bob',
      To: 'Jim',
      gid: 1000,
      text: 'test message2!',
      flag: true,
      send_date:'2020/5/09 21:14:37',
      open:'2020/5/09 21:14:37'
    },
    {
      id: 3,
      From: 'Bob',
      To: 'Jim',
      gid: 1000,
      text: 'test message2!',
      flag: true,
      send_date:'2020/5/01 21:14:37',
      open:'2020/5/01 21:14:37'
    },
    {
      id: 4,
      From: 'Bob',
      To: 'Jim',
      gid: 1000,
      text: 'test message2!',
      flag: true,
      send_date:'2020/5/02 21:14:37',
      open:'2020/5/02 21:14:37'
    },
    {
      id: 5,
      From: 'Bob',
      To: 'Jim',
      gid: 1000,
      text: 'test message2!',
      flag: true,
      send_date:'2020/5/03 21:14:37',
      open:'2020/5/03 21:14:37'
    },
    {
      id: 3,
      From: 'Tom',
      To: 'Bob',
      gid: 1000,
      text: 'test message3!',
      flag: true,
      send_date:'2020/5/09 12:00:00',
      open:'2020/5/09 21:14:37'
    },
    {
      id: 4,
      From: 'Bob',
      To: 'Gan',
      gid: 1000,
      text: 'test message4!',
      flag: true,
      send_date:'2020/5/09 11:59:59',
      open:'2020/5/09 21:14:37'
    },
    {
      id: 1,
      From: 'Tom',
      To: 'Bob',
      gid: 1000,
      text: 'test message1!',
      flag: true,
      send_date:'2020/5/09 12:00:01',
      open:'2020/5/09 21:14:37'
    },
    {
      id: 1,
      From: 'Tom',
      To: 'Bob',
      gid: 1000,
      text: 'test message1!',
      flag: true,
      send_date:'2020/5/09 21:14:37',
      open:'2020/5/09 21:14:37'
    },
    {
      id: 1,
      From: 'Tom',
      To: 'Bob',
      gid: 1000,
      text: 'test message1!',
      flag: true,
      send_date:'2020/5/09 21:14:37',
      open:'2020/5/09 21:14:37'
    },
    {
      id: 1,
      From: 'Tom',
      To: 'Bob',
      gid: 1000,
      text: 'test message1!',
      flag: true,
      send_date:'2020/5/09 21:14:37',
      open:'2020/5/09 21:14:37'
    },
    {
      id: 1,
      From: 'Tom',
      To: 'Bob',
      gid: 1000,
      text: 'test message1!',
      flag: true,
      send_date:'2020/5/09 21:14:37',
      open:'2020/5/09 21:14:37'
    },
    {
      id: 1,
      From: 'Tom',
      To: 'Bob',
      gid: 1000,
      text: 'test message1!',
      flag: true,
      send_date:'2020/5/09 21:14:37',
      open:'2020/5/09 21:14:37'
    },
    {
      id: 1,
      From: 'Tom',
      To: 'Bob',
      gid: 1000,
      text: 'test message1!',
      flag: true,
      send_date:'2020/5/09 21:14:37',
      open:'2020/5/09 21:14:37'
    },
  ]

  const ExpansionPanel = withStyles({
    root: {
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiExpansionPanel);

  const ExpansionPanelSummary = withStyles({
    root: {
      //borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -10,
      minHeight: 20,
      '&$expanded': {
        minHeight: 20,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiExpansionPanelSummary);

  const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(1, 2)
    },
  }))(MuiExpansionPanelDetails);

  const groupBy = <K, V>(
    array: readonly V[],
    getKey: (cur: V, idx: number, src: readonly V[]) => K
  ): [K, V[]][] =>
  Array.from(
    array.reduce((map, cur, idx, src) => {
      const key = getKey(cur, idx, src).split(' ')[0];
      const list = map.get(key);
      if (list) list.push(cur);
      else map.set(key, [cur]);
      return map;
    }, new Map<K, V[]>())
  );

  const compareDate = (a: any, b: any) => {
    const dateA = new Date(a.send_date);
    const dateB = new Date(b.send_date);

    var compare = 0;
    if (dateA.getTime() < dateB.getTime()) {
      compare = 1;
    } else if (dateA.getTime() > dateB.getTime()) {
      compare = -1;
    }
    return compare;
  }

  const messagesToLogs = (messages: Message[]):Log[] => {
    messages = messages.sort(compareDate);
    return groupBy(messages, message => message.send_date);
  }

  useEffect(() => {
    setDisplayLogs(messagesToLogs(messages));
  },[]);

  const partialMatchName = (message: any, inputName: string) => {
    return inputName === '' || message.From.indexOf(inputName) > -1 || message.To.indexOf(inputName) > -1;
  }

  const partialMatchText = (message: any, inputText: string) => {
    return inputText === '' || message.text.indexOf(inputText) > -1;
  }

  const equalDate = (date1: Date, date2: Date) => {
    date1.setHours(0);
    date1.setMinutes(0);
    date1.setSeconds(0);
    date2.setHours(0);
    date2.setMinutes(0);
    date2.setSeconds(0);
    return date1.getTime() == date2.getTime();
  }

  const filterMessagesByName = (messages: Message[], name: string) => {
    return messages.filter((message: any) => partialMatchName(message, name));
  }

  const filterMessagesByText = (messages: Message[], text: string) => {
    return messages.filter((message: any) => partialMatchText(message, text));
  }

  const filterMessagesByDate = (messages: Message[], inputDate: Date|null) => {
    return messages.filter((message: any) => equalDate(inputDate, new Date(message.send_date)));
  }

  const filterMessages = (messages: Message[], name: string, text: string, date: Date|null) => {
    var filteredMessages = messages;
    if(name !== '') {
      filteredMessages = filterMessagesByName(filteredMessages, name);
    }
    if(text !== '') {
      filteredMessages = filterMessagesByText(filteredMessages, text);
    }
    if(date !== null) {
      filteredMessages = filterMessagesByDate(filteredMessages, date);
    }

    return filteredMessages;
  }

  const onChangeInputName = (evt: any) => {
    const inputName = evt.target.value;
    setName(inputName);
    var filteredMessages: any = filterMessages(messages, inputName, text, date);

    setDisplayLogs(messagesToLogs(filteredMessages));
  }

  const onChangeInputText = (evt: any) => {
    const inputText = evt.target.value;
    setText(inputText);
    var filteredMessages: any = filterMessages(messages, name, inputText, date);

    setDisplayLogs(messagesToLogs(filteredMessages));
  }

  const onChangeInputDate = (inputDate: any) => {
    //const inputDate = evt.target.value;
    setDate(inputDate);
    var filteredMessages: any = filterMessages(messages, name, text, inputDate);

    setDisplayLogs(messagesToLogs(filteredMessages));
  }

  /*const fs = require("fs");

  const existsFile = (filename, callback) => {
    fs.access(filename, "r", function (err, fd) {
        callback(!err || err.code !== "ENOENT");
    });
  }*/


  const onClickLog = (evt: any, message: any) => {
    setMessage(message);

    /*const config: object = {serverip: '127.0.0.1'};
    const configString = JSON.stringify(config);

    existsFile(process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"] + '/hoge.json', function (result) {
        if (result) {
            console.log("ファイルが存在する");
            fs.readFile(process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"] + '/hoge.json', { encoding:"utf-8"}, (err, data)=>{
              if(err) {
                console.log(err)
                alert(err);
              } else {
                console.log(JSON.parse(data));
              }
            });
        } else {
            console.log("ファイルが存在しない");
            fs.writeFile(process.env[process.platform == "win32" ? "USERPROFILE" : "HOME"] + '/hoge.json', configString, (error) => {
              if (error != null) {
                  alert("save error.");
                  return;
              }
            });
        }
    });*/
  }

  return (
    <div className={styles.rootcontainer}>
      <div>
        <Header history={props.history}/>
      </div>
      <div className={styles.container}>
        <div className={styles.logDisplay}>
        <div className={styles.inputForm}>
            <div>
              {/* <label>Name</label> */}
              <TextField id="standard-basic" label="Name" value={name} onChange={onChangeInputName}/>
            </div>
            <div>
              {/* <label>Text</label> */}
              <TextField id="standard-basic" label="Text" value={text} onChange={onChangeInputText}/>
            </div>
            <div>
              {/* <label>Date</label> */}
              {/* <TextField id="date" type="Date" label="Date" value={date} onChange={onChangeInputDate}
                InputLabelProps={{
                shrink: true,
              }}/> */}
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="yyyy/MM/dd"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  value={date} onChange={onChangeInputDate}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
          </div>
          <div className={styles.logs}>
            {displayLogs.map((log: any, index: number) => {
              return <ExpansionPanel square key={index}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  className={styles.summary}
                  aria-controls="panel1d-content" id="panel1d-header"
                >
                  {log[0]}
                </ExpansionPanelSummary>
                {(() => {
                const items = [];
                for (let i = 0; i < log[1].length; i++) {
                  items.push(<ExpansionPanelDetails className={styles.details} onClick={e => onClickLog(e, log[1][i])} key={i}>{log[1][i].send_date + '  ' + log[1][i].From + '->' + log[1][i].To}</ExpansionPanelDetails>)
                }
                return items;
                })()}
              </ExpansionPanel>
            })}
          </div>
        </div>
        <div className={styles.messageDisplay}>
          {message !== null && (<MessageCard message={message} />)}
        </div>
      </div>
    </div>
  );
}

export default App;

/**







 */
