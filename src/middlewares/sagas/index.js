import { takeLatest } from 'redux-saga/effects'

import { ADD_MESSAGE_ACTION } from '../../store/components-store/messages/constants';
import onAddMessageWithSaga from './messages/saga';

export default function* sagas() { 
  yield takeLatest(ADD_MESSAGE_ACTION, onAddMessageWithSaga);
};