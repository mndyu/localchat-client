import React, { useState, useEffect } from 'react';
import styles from './Log.css'
import Message from './MessageCard'

function App() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

    const messages = [
      {
        id: 1,
        From: 10,
        To: 20,
        gid: 1000,
        text: 'test message!',
        flag: true,
        send_date:'2020-05-09',
        open:'2020-05-10'
      },
      {
        id: 1,
        From: 10,
        To: 20,
        gid: 1000,
        text: 'test message!',
        flag: true,
        send_date:'2020-05-09',
        open:'2020-05-10'
      },
      {
        id: 1,
        From: 10,
        To: 20,
        gid: 1000,
        text: 'test message!',
        flag: true,
        send_date:'2020-05-10',
        open:'2020-05-10'
      },
      {
        id: 1,
        From: 10,
        To: 20,
        gid: 1000,
        text: 'test message!',
        flag: true,
        send_date:'2020-05-10',
        open:'2020-05-10'
      }
    ]

    var logs: any
    /*= [
      {
        date: '2020-05-09',
        messages: [
          {
            id: 1,
            From: 10,
            To: 20,
            gid: 1000,
            text: 'test message!1111',
            flag: true,
            send_date:'2020-05-09',
            open:'2020-05-10'
          },
          {
            id: 1,
            From: 10,
            To: 20,
            gid: 1000,
            text: 'test message!22222',
            flag: true,
            send_date:'2020-05-09',
            open:'2020-05-10'
          },
        ]
      },
      {
        date: '2020-05-10',
        messages: [
          {
            id: 1,
            From: 10,
            To: 20,
            gid: 1000,
            text: 'test message!1111',
            flag: true,
            send_date:'2020-05-10',
            open:'2020-05-10'
          },
          {
            id: 1,
            From: 10,
            To: 20,
            gid: 1000,
            text: 'test message!22222',
            flag: true,
            send_date:'2020-05-10',
            open:'2020-05-10'
          },
        ]
      },
    ];*/

    const [displayLogs, setDisplayLogs] = useState(logs)

    const groupBy = <K extends PropertyKey, V>(
      array: readonly V[],
      getKey: (cur: V, idx: number, src: readonly V[]) => K
      ) =>
      array.reduce((obj, cur, idx, src) => {
          const key = getKey(cur, idx, src);
          (obj[key] || (obj[key] = []))!.push(cur);
          return obj;
    }, {} as Partial<Record<K, V[]>>);

    const messagesToLogs = (messages: any) => {
      logs = groupBy(messages, message => message.send_date)


    }

    const checkNameMatch = (messages: string, inputString: string) => {

    }

    const onChangeInputName = (evt: any) => {
      messagesToLogs(messages)
      setName(evt.target.value);

      if(name !== '') {

      }
      if(date !== '') {
        setDisplayLogs(filterDate(logs, date));
      }

      /*var filterLogs
      var filterMessages

      logs.map((log: any, index: number) => {
        filterMessages

        if(filterMessages.length > 0) {
          log.push({})
        }
      })*/

      //setDisplayLogs(logs.filter(log => checkNameMatch(log)))
    }

    const filterDate = (logs: any, inputDate: string) => {
      return logs.filter((log: { date: string; }) => inputDate === '' || log.date === inputDate)
    }

    const onChangeInputDate = (evt: any) => {
      setDate(evt.target.value)
      var filterLogs: any
      if(name !== '') {

      }
      if(date !== '') {
        filterLogs = filterDate(logs, evt.target.value)
      }

      setDisplayLogs(filterLogs)
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
            <summary>{log.date}</summary>
            {(() => {
              const items = [];
              for (let i = 0; i < log.messages.length; i++) {
                items.push(<Message message={log.messages[i]} key={i} />)
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
