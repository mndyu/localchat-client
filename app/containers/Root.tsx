import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { Store } from '../reducers/types';
import Routes from '../Routes';

// layout
import Header from '../components/Header';
import Side from './SidePannel'
import styles from './Root.css'

type Props = {
  store: Store;
  history: History;
};


const Root = ({ store, history }: Props) => (
  <Provider store={store}>
    <Header />
    <div className={styles.container}>
      <Side />
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </div>
  </Provider>
);

export default hot(Root);
