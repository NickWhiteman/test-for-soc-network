import { all, takeLatest } from "redux-saga/effects";

import { 
    createPostSaga,
    deletePostSaga,
    getPostByIdSaga,
    getPostsSaga,
    sagaActions, 
} from "./saga/saga";

export function* PostRootSaga() {
    yield all([
        takeLatest(sagaActions.getPosts.type, getPostsSaga),
        takeLatest(sagaActions.getPostById.type, getPostByIdSaga),
        takeLatest(sagaActions.createPost.type, createPostSaga),
        takeLatest(sagaActions.deletePost.type, deletePostSaga)
    ]);
}