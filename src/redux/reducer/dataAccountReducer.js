import { ActionTypes } from "redux/constants/actionTypes";

const initialState = {
  data: [],
};

export const dataAccountReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ACCOUNT_DATA:
      return { ...state, data: payload };
    default:
      return state;
  }
};
