import React, { useState, useEffect } from 'react';

type Props = {
  groupId: any;
};


function App(props: Props) {
  return(
    <div>
      <h1>GroupSetting</h1>
      <div>
        <h4>Name</h4>
        <input type="text"/>
      </div>
      <div>
        <h4>Member</h4>
        <input type="text"/>
      </div>
      <div>
        <h4>Notification</h4>
        <label><input type="checkbox"/>通知をオフにする</label>
      </div>
    </div>
  );
}

export default App;
