import { combineReducers } from "redux";
import { dataAccountReducer } from "./postReducer";

const reducers = combineReducers({
  dataAccount: dataAccountReducer,
});

export default reducers;
