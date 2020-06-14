import { GetState, Dispatch } from '../reducers/types';

export const OPEN = 'OPEN_SOCKET';
export const CLOSE = 'CLOSE_SOCKET';

export function openSocket() {
  return {
    type: OPEN
  };
}

export function closeSocket() {
  return {
    type: CLOSE
  };
}

