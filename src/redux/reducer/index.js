import { combineReducers } from "redux";
import { dataAccountReducer } from "./dataAccountReducer";
import {
  dataCommentsReducer,
  dataCoursesDetailUserReducer,
} from "./dataDetailCoursesReducer";
import { dataDetailSpesialisasiReducer } from "./dataDetailSpesialisasiReducer";

const reducers = combineReducers({
  dataAccount: dataAccountReducer,
  dataDetailCourses: dataCoursesDetailUserReducer,
  dataCommentsId: dataCommentsReducer,
  dataSpesialisasi: dataDetailSpesialisasiReducer,
});

export default reducers;
