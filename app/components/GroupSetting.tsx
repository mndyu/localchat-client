import React, { useState, useEffect } from 'react';
import styles from './GroupSetting.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { ListItemIcon, TextField, Button } from '@material-ui/core';

type Props = {
  groupId: any;
  closeModal: Function;
};

function App(props: Props) {
  const [addUserToggle, setAddUserToggle] = useState(false);
  const [members, setMembers] = useState([
    {
      name: "Tom",
    },
    {
      name: "Bob",
    },
    {
      name: "Jim",
    },
  ]);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const onClickDeleteMember = (evt: any, index: number) => {
    members.splice(index, 1);
    setMembers(members);
    forceUpdate();
  }

  const onClickAddMember = (evt: any) => {
    setAddUserToggle(true);
  }

  const onClickRegisterUser = (evt: any) => {
    let tmp = members;
    tmp.push({name:"test"});
    setMembers(tmp);
    setAddUserToggle(false);
  }

  return(
    <div className={styles.groupSetting}>
      <h2>GroupSetting</h2>
      <div>
        <h4>Name</h4>
        <TextField id="standard-basic" />
      </div>
      <div>
        <h4>Member</h4>
        <List component="nav">
        {members.map((member: any, index: number) => {
          return <ListItem key={index} button>
            <ListItemText primary={member.name} />
            <IconButton edge="end" aria-label="delete" onClick={e => onClickDeleteMember(e, index)}>
              <i className={"fas fa-minus-circle delete"}></i>
            </IconButton>
          </ListItem>
        })}
        { !addUserToggle?
          <ListItem onClick={onClickAddMember} button>
            <ListItemIcon>
              <i className={"fas fa-plus-circle add"}></i>
            </ListItemIcon>
            <ListItemText primary="add member"/>
          </ListItem>
          :
          <ListItem>
            <TextField id="standard-basic" label="User Name" />
            <Button variant="contained" color="primary" onClick={onClickRegisterUser}>
              Add
            </Button>
          </ListItem>}
        </List>
      </div>
      <div>
        <h4>Notification</h4>
        <label><input type="checkbox"/>通知をオフにする</label>
      </div>
    </div>
  );
}

export default App;
