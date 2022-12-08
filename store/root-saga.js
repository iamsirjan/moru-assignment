import { all } from "redux-saga/effects";
import userDetails from "../redux/user/saga";

export function* rootSagas() {
  yield all([userDetails()]);
}
