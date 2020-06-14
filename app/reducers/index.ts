import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import counter from './counter';

import sock from './socket'

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter,
    sock
  });
}
