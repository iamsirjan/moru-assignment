import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./root-redux";
import { rootSagas } from "./root-saga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);
export default store;
