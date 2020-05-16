import React, { useState, useEffect } from 'react';
import styles from './Log.css';
import Message from './MessageCard';

function App() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState(null);
  const [displayLogs, setDisplayLogs] = useState([]);

  var messages = [
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

  const messagesToLogs = (messages: any) => {
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

  const filterMessagesByName = (messages: any, name: string) => {
    return messages.filter((message: any) => partialMatchName(message, name));
  }

  const filterMessagesByText = (messages: any, text: string) => {
    return messages.filter((message: any) => partialMatchText(message, text));
  }

  const filterMessagesByDate = (messages: any, inputDate: any) => {
    return messages.filter((message: any) => equalDate(new Date(inputDate), new Date(message.send_date)));
  }

  const filterMessages = (messages: any, name: string, text: string, date: string) => {
    var filteredMessages = messages;
    if(name !== '') {
      filteredMessages = filterMessagesByName(filteredMessages, name);
    }
    if(text !== '') {
      filteredMessages = filterMessagesByText(filteredMessages, text);
    }
    if(date !== '') {
      filteredMessages = filterMessagesByDate(filteredMessages, date);
    }

    console.log(filteredMessages)
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

  const onChangeInputDate = (evt: any) => {
    const inputDate = evt.target.value;
    setDate(inputDate);
    var filteredMessages: any = filterMessages(messages, name, text, inputDate);

    setDisplayLogs(messagesToLogs(filteredMessages));
  }

  const onClickLog = (evt: any, message: any) => {
    setMessage(message);
  }

  return (
    <div className={styles.container}>
      <div className={styles.logDisplay}>
        <div className={styles.inputForm}>
          <div>
            <label>Name</label>
            <input value={name} onChange={onChangeInputName}/>
          </div>
          <div>
            <label>Text</label>
            <input value={text} onChange={onChangeInputText}/>
          </div>
          <div>
            <label>Date</label>
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
