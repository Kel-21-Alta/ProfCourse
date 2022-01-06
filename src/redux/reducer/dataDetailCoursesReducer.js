import { ActionTypes } from "redux/constants/actionTypes";

const initialState = {
  data: [],
};

export const dataCoursesDetailUserReducer = (
  state = initialState,
  { type, data }
) => {
  switch (type) {
    case ActionTypes.SET_DETAIL_COURSES_USER:
      return { ...state, payload: data };
    default:
      return state;
  }
};
