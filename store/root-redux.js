import { combineReducers } from "redux";
import UserReducer from "../redux/user/reducer";

const reducers = combineReducers({
  user: UserReducer,
});

export default reducers;
