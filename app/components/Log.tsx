import React, { useState, useEffect } from 'react';
import styles from './Log.css'
import Message from './MessageCard'

function App() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

    const messages = [
      {
        id: 1,
        From: 'Tom',
        To: 'Bob',
        gid: 1000,
        text: 'test message!',
        flag: true,
        send_date:'2020-05-09',
        open:'2020-05-10'
      },
      {
        id: 1,
        From: 'Bob',
        To: 'Jim',
        gid: 1000,
        text: 'test message!',
        flag: true,
        send_date:'2020-05-09',
        open:'2020-05-10'
      },
      {
        id: 1,
        From: 'Tom',
        To: 'Bob',
        gid: 1000,
        text: 'test message!',
        flag: true,
        send_date:'2020-05-10',
        open:'2020-05-10'
      },
      {
        id: 1,
        From: 'Bob',
        To: 'Gan',
        gid: 1000,
        text: 'test message!',
        flag: true,
        send_date:'2020-05-10',
        open:'2020-05-10'
      }
    ]

    var logs: any = []
    const [displayLogs, setDisplayLogs] = useState(logs)

    const groupBy = <K, V>(
      array: readonly V[],
      getKey: (cur: V, idx: number, src: readonly V[]) => K
    ): [K, V[]][] =>
      Array.from(
          array.reduce((map, cur, idx, src) => {
              const key = getKey(cur, idx, src);
              const list = map.get(key);
              if (list) list.push(cur);
              else map.set(key, [cur]);
              return map;
          }, new Map<K, V[]>())
    );

    useEffect(() => {
      logs = messagesToLogs(messages)
      setDisplayLogs(logs)
    },[]);

    const messagesToLogs = (messages: any) => {
      return groupBy(messages, message => message.send_date)
    }

    const checkNameMatch = (message: any, inputString: string) => {
      return inputString === '' || inputString === message.From || inputString === message.To;
    }

    const onChangeInputName = (evt: any) => {
      setName(evt.target.value)
      var filterMessages: any = messages;

      if(evt.target.value !== '') {
        filterMessages = filterMessages.filter((message: any) => checkNameMatch(message, evt.target.value))
      }
      if(date !== '') {
        filterMessages = filterDate(filterMessages, date);
      }

      setDisplayLogs(messagesToLogs(filterMessages));
    }

    const filterDate = (messages: any, inputDate: string) => {
      return messages.filter((message: any) => inputDate === message.send_date)
    }

    const onChangeInputDate = (evt: any) => {
      setDate(evt.target.value)
      var filterMessages: any = messages;

      if(name !== '') {
        filterMessages = filterMessages.filter((message: any) => checkNameMatch(message, name))
      }
      if(evt.target.value !== '') {
        filterMessages = filterDate(filterMessages, evt.target.value);
      }

      setDisplayLogs(messagesToLogs(filterMessages));
    }

    return (
      <div className={styles.container}>
      <div className={styles.userList}>
        <div className={styles.inputForm}>
          <div>
            <label>Name:</label>
            <input id="name" value={name} onChange={onChangeInputName}/>
          </div>
          <div>
            <label>Date:</label>
            <input type="Date" value={date} onChange={onChangeInputDate}/>
          </div>
        </div>
        <div className={styles.logs}>
          {displayLogs.map((log: any, index: number) => {
            return <details key={index}>
            <summary>{log[0]}</summary>
            {(() => {
              const items = [];
              for (let i = 0; i < log[1].length; i++) {
                items.push(<div key={i}>{log[1][i].send_date + '  ' + log[1][i].From + '->' + log[1][i].To}</div>)
              }
              return items;
            })()}
            </details>
          })}
        </div>
      </div>
      </div>
    );
  }

export default App;
