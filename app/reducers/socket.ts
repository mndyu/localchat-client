import { Action } from 'redux';
import { OPEN, CLOSE } from '../actions/websocket';

export default function sock(state = "", action: Action<string>) {
  switch (action.type) {
    case OPEN:
        console.log("open socket")
        state = new WebSocket('ws://133.167.108.162:18000/api/v1/ws')
        return state;
    case CLOSE:
      console.log("close socket")
      state.close();
        return state;
    default:
      return state;
  }
}
