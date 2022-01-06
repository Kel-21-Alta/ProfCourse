import { combineReducers } from "redux";
import { dataAccountReducer } from "./dataAccountReducer";
import { dataCoursesDetailUserReducer } from "./dataDetailCoursesReducer";

const reducers = combineReducers({
  dataAccount: dataAccountReducer,
  dataDetailCourses: dataCoursesDetailUserReducer,
});

export default reducers;
