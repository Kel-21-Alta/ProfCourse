import { combineReducers } from "redux";
import { dataAccountReducer } from "./dataAccountReducer";
import {
  dataCommentsReducer,
  dataCoursesDetailUserReducer,
} from "./dataDetailCoursesReducer";
import { dataDetailSpesialisasiReducer } from "./dataDetailSpesialisasiReducer";
import { dataQuizReducer } from "./dataQuizReducer";

const reducers = combineReducers({
  dataAccount: dataAccountReducer,
  dataDetailCourses: dataCoursesDetailUserReducer,
  dataCommentsId: dataCommentsReducer,
  dataSpesialisasi: dataDetailSpesialisasiReducer,
  dataQuizScore: dataQuizReducer,
});

export default reducers;
