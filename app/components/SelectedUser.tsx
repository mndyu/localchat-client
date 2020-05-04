import React, { useState, useEffect } from 'react';

type Props = {
    username: any;
    removeUser: Function;
  };
  
function App({username, removeUser }: Props) {

    return (
      <div onClick={e => removeUser(username.name)}>
          {username.name}
      </div>
    );
  }
  
export default App;