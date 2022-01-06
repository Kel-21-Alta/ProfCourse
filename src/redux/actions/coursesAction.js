import { ActionTypes } from "redux/constants/actionTypes";

export const dataCoursesDetailUser = (data) => {
  return {
    type: ActionTypes.SET_ACCOUNT_DATA,
    payload: data,
  };
};
