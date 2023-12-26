import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";
import { pingEpic } from "../epics";
import { pingReducer } from "../reducers";

export const rootEpic = combineEpics(pingEpic);

export const rootReducer = combineReducers({
  pingReducer,
});
