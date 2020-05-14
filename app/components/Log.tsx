import React, { useState, useEffect } from 'react';
import styles from './Log.css'
import Message from './MessageCard'

function App() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState(null)

    const messages = [
      {
        id: 1,
        From: 'Tom',
        To: 'Bob',
        gid: 1000,
        text: 'test message1!',
        flag: true,
        send_date:'2020/5/10 21:14:37',
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
        send_date:'2020/5/09 21:14:37',
        open:'2020/5/09 21:14:37'
      },
      {
        id: 4,
        From: 'Bob',
        To: 'Gan',
        gid: 1000,
        text: 'test message4!',
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

    var logs: any = []
    const [displayLogs, setDisplayLogs] = useState(logs)

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
      const dateA = new Date(a[0]);
      const dateB = new Date(b[0]);

      var compare = 0;
      if (dateA.getTime() < dateB.getTime()) {
        compare = 1;
      } else if (dateA.getTime() > dateB.getTime()) {
        compare = -1;
      }
      return compare;
    }

    useEffect(() => {
      logs = messagesToLogs(messages)
      logs.sort(compareDate);
      setDisplayLogs(logs)
      console.log(logs)
    },[]);

    const messagesToLogs = (messages: any) => {
      return groupBy(messages, message => message.send_date)
    }

    const checkNameMatch = (message: any, inputName: string) => {
      return inputName === '' || inputName === message.From || inputName === message.To;
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

    const equalDate = (date1: Date, date2: Date) => {
      date1.setHours(0);
      date1.setMinutes(0);
      date1.setSeconds(0);
      date2.setHours(0);
      date2.setMinutes(0);
      date2.setSeconds(0);
      return date1.getTime() == date2.getTime();
    }

    const filterDate = (messages: any, inputDate: any) => {
      console.log(inputDate)
      return messages.filter((message: any) => equalDate(new Date(inputDate), new Date(message.send_date)));
    }

    const onChangeInputDate = (evt: any) => {
      setDate(evt.target.value)
      var filterMessages: any = messages;

      if(name !== '') {
        filterMessages = filterMessages.filter((message: any) => checkNameMatch(message, name))
      }
      if(evt.target.value !== '') {
        filterMessages = filterDate(filterMessages, evt.target.value);
        console.log(filterMessages)
      }

      setDisplayLogs(messagesToLogs(filterMessages));
    }

    const onClickLog = (evt: any, message: any) => {
      setMessage(message);
    }

    return (
      <div className={styles.container}>
        <div className={styles.logDisplay}>
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
                  items.push(<div className={styles.log} onClick={e => onClickLog(e, log[1][i])} key={i}>{log[1][i].send_date + '  ' + log[1][i].From + '->' + log[1][i].To}</div>)
                }
                return items;
              })()}
              </details>
            })}
          </div>
        </div>
        <div className={styles.messageDisplay}>
          {message !== null && (<Message message={message} key={1} />)}
        </div>
      </div>

    );
  }

export default App;
