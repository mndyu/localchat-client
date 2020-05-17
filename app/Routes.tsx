import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import Logs from './components/Log'
import Setting from './components/Setting'

import Test from './components/Test'
import Select from './components/AddGroupSelect'

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route exact path={routes.HOME} component={Test} />
        <Route exact path={routes.GROUP} component={Test} />
        <Route exact path={routes.LOGS} component={Logs} />
        <Route exact path={routes.SETTING} component={Setting} />
        <Route exact path={routes.AddGROUP} component={Select} />
      </Switch>
    </App>
  );
}
