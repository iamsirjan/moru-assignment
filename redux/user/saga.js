import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { deleteUsers, getUsers } from "../../api";
import actions from "./actions";
import { toast } from "react-toastify";

function* getAllUsers(action) {
  try {
    let apiResponse = yield call(getUsers);
    let { data } = apiResponse;

    yield put({
      type: actions.GET_USERS_SUC,
      details: data,
    });
  } catch (err) {
    yield put({
      type: actions.GET_USERS_FAIL,
    });
  }
}

function* deleteUser(action) {
  try {
    let apiResponse = yield call(deleteUsers, action.userId);

    const id = action.userId;

    yield put({
      type: actions.DLT_USERS_SUC,
      details: id,
    });
    toast("User has been deleted");
  } catch (err) {
    yield put({
      type: actions.DLT_USERS_FAIL,
    });
  }
}

export function* getUserDetails() {
  yield takeEvery(actions.GET_USERS_REQ, getAllUsers);
  yield takeEvery(actions.DLT_USERS_REQ, deleteUser);
}

export default function* userDetails() {
  return yield all([fork(getUserDetails)]);
}
