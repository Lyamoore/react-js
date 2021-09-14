// import { put, takeLatest, delay } from 'redux-saga/effects'

// function* onAddMessageWithSaga(action) {
//    yield put(addMessage(action));
//    if (action.message.author !== AUTHORS.BOT) {
//       const botMessage = 'done';
//       yield delay(2000);
//       yield put(addMessage(chatId, botMessage));
//    };
// };


// export default function* sagas() { 
//   yield takeLatest("MESSAGES::ADD_MESSAGE_WITH_SAGA", onAddMessageWithSaga);
// };