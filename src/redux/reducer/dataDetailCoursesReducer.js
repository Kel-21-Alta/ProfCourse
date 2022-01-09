import { ActionTypes } from "redux/constants/actionTypes";

const initialState = {
  data: [],
};

export const dataCoursesDetailUserReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_DETAIL_COURSES_USER:
      return { ...state, data: payload };
    default:
      return state;
  }
};

export const dataCommentsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_COMMENTS:
      return { ...state, data: payload };
    default:
      return state;
  }
};
