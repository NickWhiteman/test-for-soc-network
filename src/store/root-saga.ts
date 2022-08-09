import { all, takeLatest } from "redux-saga/effects";
import { 
    sagaActions, 
} from "./saga/saga";

export function* PostRootSaga() {
    yield all([
        // takeLatest(sagaActions.singIn.type, singInWorker),
        // takeLatest(sagaActions.singUp.type, singUpWorker),
        // takeLatest(sagaActions.update.type, updateWorker)
    ]);
}