import { ActionTypes } from "redux/constants/actionTypes";

export const setQuizAction = (data) => {
  return {
    type: ActionTypes.SET_QUIZ_SCORE,
    payload: data,
  };
};
