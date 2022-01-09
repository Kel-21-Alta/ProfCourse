import { combineReducers } from "redux";
import { dataAccountReducer } from "./dataAccountReducer";
import {
  dataCommentsReducer,
  dataCoursesDetailUserReducer,
} from "./dataDetailCoursesReducer";

const reducers = combineReducers({
  dataAccount: dataAccountReducer,
  dataDetailCourses: dataCoursesDetailUserReducer,
  dataCommentsId: dataCommentsReducer,
});

export default reducers;
