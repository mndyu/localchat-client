import React, { useState, useEffect } from 'react';
import styles from './Input.scss'
import User from './SelectedUser'
//https://github.com/sparksuite/simplemde-markdown-editor
import  SimpleMDE from 'simplemde'
import Images from './ImageImport'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Chip from '@material-ui/core/Chip';

// https://material-ui.com/components/chips/
type Props = {
  setText: Function;
  selectedUser: any;
  resetUser: Function;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: '70%',
      height: '60%',
      overflowY: 'auto',
      color: '#000000'
    },
  }),
);

function App({setText, selectedUser, resetUser}: Props ) {
  const classes = useStyles();
  const [message, setMessage] = useState("")
  const [open, setOpen] = useState(false)
  const [evt, setEvt] = useState()

  let text: any = null;
  let simple: SimpleMDE;
  let mes = "";

  const resetSentUser = (username: any) => {
    resetUser(username)
  }

 const sendText = (e: any) => {
    if(simple.value() === "" ) { 
        console.log("none text")
        return
    }

    setText(simple.value())
    simple.value("")
 }

  useEffect(() => {

    simple = new SimpleMDE({
      autoDownloadFontAwesome: false,
      element: text,
      autosave: {
          enabled: true,
          uniqueId: "GroupChat",
          delay: 1000,
      },
      toolbar: [
        'bold',
        'italic',
        '|',
        'quote',
        'unordered-list',
        'ordered-list',
        'link',
        '|',
        'preview',
        '|',
        'guide',    
        '|',
        {
          name: "sendText",
          action: sendText,
          className: "fa fa-envelope", // Look for a suitable icon
          title: "send Text (Ctr/Cmd-Enter)",
        },
      ],
      status: ["autosave", "lines", "words", "cursor"], 
    })


    simple.codemirror.addKeyMap({"Cmd-Enter": sendText})
    simple.codemirror.addKeyMap({"Ctrl-Enter": sendText})
    // set MaxLength
    simple.codemirror.on("change",() => {
      if (simple.value().length < 501) {        
        mes = simple.value()
      } else {
        simple.value(mes)
      }
    })
  },[]);

  const onDrop = (e:React.DragEvent) => {
    e.preventDefault()

    setEvt(e.dataTransfer.files)
    setOpen(true)
  }

  const closeModal = (e: any) => {
    setOpen(false)
  }

  return (
      <div onDrop={onDrop} className={styles.container}>
        <Modal open={open}  onClose={closeModal}
            className={classes.modal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                  <Images DropEvent={evt}/>
                </div>
            </Fade>
        </Modal>
          <div className={styles.selected}>
            <div className={styles.sconatiner}>
              {selectedUser.map((e: any,idx: number) => {
                return <div key={idx} >
                    <Chip size="small" label={e.name} onDelete={evt => resetSentUser(e)} color="primary" />
                  </div>              
              })}
            </div>
          </div>
          <div className={styles.intputGroup}>
            <div>
              <textarea  ref={el => text = el}/>
            </div>
          </div>
      </div>
    );
  }
  
export default App;
