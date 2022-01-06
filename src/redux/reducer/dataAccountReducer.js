import { ActionTypes } from "redux/constants/actionTypes";

const initialState = {
  data: [],
};

export const dataAccountReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case ActionTypes.SET_ACCOUNT_DATA:
      return { ...state, payload: data };
    default:
      return state;
  }
};
