import React, { useState, useEffect } from 'react';
import styles from './GroupContext.scss'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


import GroupSetting from './GroupSetting'

type Props = {
    X: number,
    Y: number,
    close: any,
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

function App({X,Y, close}: Props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    const closeContext = () => {
        close(false)
    }

    const openModal = () => {
        console.log("open context modal")
        setOpen(true)
    }

    const closeModal = () => {
        console.log("open context modal")
        setOpen(false)
    }


    return (
      <div className={styles.container} style={{
          top: Y,
          left: X
      }}
        onMouseLeave={closeContext}
      >
            <div onClick={openModal}>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
            <div>
                Dismiss Group
            </div>
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
                    <GroupSetting groupId="123"/>
                    </div>
                </Fade>
            </Modal>
      </div>
    );
  }

export default App;
