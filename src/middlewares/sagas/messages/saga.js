import { put, delay } from 'redux-saga/effects'

import { addMessageAction } from '../../../store/components-store/messages/actions';

export default function* onAddMessageWithSaga(action) {
    const botMessage = 'done';
    yield delay(2000);
    yield put(addMessageAction( action.payload.chatId, botMessage ));
 };