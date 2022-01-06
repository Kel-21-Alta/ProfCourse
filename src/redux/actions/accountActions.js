import { ActionTypes } from "redux/constants/actionTypes";

export const accountData = (data) => {
  return {
    type: ActionTypes.SET_ACCOUNT_DATA,
    payload: data,
  };
};
