import { createAction } from "@reduxjs/toolkit";
import { put, all, call, takeLatest, select } from "redux-saga/effects";
import { IUpdateForm } from "../../../ui-library/src/components/form/types";
import { postAction } from "../reducer";

/*
 *   actions saga
 */
const GET_POSTS = "GET_POSTS";

export const sagaActions = {
  getPosts: createAction(GET_POSTS),
};

/*
 *   workers saga
 */

