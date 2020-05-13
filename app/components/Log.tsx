import React, { useState, useEffect } from 'react';
import styles from './Log.css'

function App() {
  const [name, setName] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

    const messages: any = [
      {
        Message: {
          properties: {
            id: 1,
            From: 10,
            To: 20,
            gid: 1000,
            text: 'test message!',
            flag: true,
            send_date:'2020-05-09',
            open:'2020-05-10'
          }
        }
      },
      {
        Message: {
          properties: {
            id: 1,
            From: 10,
            To: 20,
            gid: 1000,
            text: 'test message!',
            flag: true,
            send_date:'2020-05-09',
            open:'2020-05-10'
          }
        }
      },
      {
        Message: {
          properties: {
            id: 1,
            From: 10,
            To: 20,
            gid: 1000,
            text: 'test message!',
            flag: true,
            send_date:'2020-05-09',
            open:'2020-05-10'
          }
        }
      },
      {
        Message: {
          properties: {
            id: 1,
            From: 10,
            To: 20,
            gid: 1000,
            text: 'test message!',
            flag: true,
            send_date:'2020-05-09',
            open:'2020-05-10'
          }
        }
      }
    ]

    var logs: any = [
      {
        date: '2020-05-09',
        messages: [
          {
            Message: {
              properties: {
                id: 1,
                From: 10,
                To: 20,
                gid: 1000,
                text: 'test message!1111',
                flag: true,
                send_date:'2020-05-09',
                open:'2020-05-10'
              }
            }
          },
          {
            Message: {
              properties: {
                id: 1,
                From: 10,
                To: 20,
                gid: 1000,
                text: 'test message!22222',
                flag: true,
                send_date:'2020-05-09',
                open:'2020-05-10'
              }
            }
          },
        ]
      },
      {
        date: '2020-05-10',
        messages: [
          {
            Message: {
              properties: {
                id: 1,
                From: 10,
                To: 20,
                gid: 1000,
                text: 'test message!1111',
                flag: true,
                send_date:'2020-05-10',
                open:'2020-05-10'
              }
            }
          },
          {
            Message: {
              properties: {
                id: 1,
                From: 10,
                To: 20,
                gid: 1000,
                text: 'test message!22222',
                flag: true,
                send_date:'2020-05-10',
                open:'2020-05-10'
              }
            }
          },
        ]
      },
    ];

    const [displayLogs, setDisplayLogs] = useState(logs)

    const checkNameMatch = (messages: string, inputString: string) => {

    }

    const onChangeInputName = (evt: any) => {
      setName(evt.target.value)

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

    const compareDate = (date: string, inputMonth: string, inputDay: string) => {
      var splitDate = date.split('-');

      return (inputMonth === '' || Number(splitDate[1]) === Number(inputMonth))
      && (inputDay === '' || Number(splitDate[2]) === Number(inputDay))
    }

    const onChangeInputMonth = (evt: any) => {
      setMonth(evt.target.value)

      setDisplayLogs(logs.filter((log: { date: string; }) => compareDate(log.date, evt.target.value, day)))
    }

    const onChangeInputDay = (evt: any) => {
      setDay(evt.target.value)

      setDisplayLogs(logs.filter((log: { date: string; }) => compareDate(log.date, month, evt.target.value)))
      console.log(displayLogs)
    }

    return (
      <div className={styles.container}>
      <div className={styles.userList}>
        <div>
          <div>
            <label>Name:</label>
            <input id="name" value={name} onChange={onChangeInputName}/>
          </div>

          <div>
            <label>Date:</label>
            <select id="month" value={month} onChange={onChangeInputMonth}>
              <option></option>
              { [...Array(3).keys()].map(i => ++i + 2).map((month) => <option value={month}>{month}</option>)}
            </select>
            <span>/</span>
            <select id="day" value={day} onChange={onChangeInputDay}>
              <option></option>
              { [...Array(30).keys()].map(i => ++i).map((day) => <option value={day}>{day}</option>)}
            </select>
        </div>
        </div>
      <div>
        {displayLogs.map((log: any, index: number) => {
          return <details key={index}>
          <summary>{log.date}</summary>
          {(() => {
            const items = [];
            for (let i = 0; i < log.messages.length; i++) {
              items.push(<div key={i}>{log.messages[i].Message.properties.text}</div>)
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
