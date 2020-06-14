import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Test';

import { counterStateType } from '../reducers/types';

import { openSocket, closeSocket } from '../actions/websocket'

function mapStateToProps(state: counterStateType) {
  return {
    sock: state.sock
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      openSocket,
      closeSocket
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
