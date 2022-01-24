import { ActionTypes } from "redux/constants/actionTypes";

const initialState = {
  data: [],
};

export const dataQuizReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_QUIZ_SCORE:
      return { ...state, data: payload };
    default:
      return state;
  }
};
