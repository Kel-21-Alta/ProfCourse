import { ActionTypes } from "redux/constants/actionTypes";

const initialState = {
  data: [],
};

export const dataDetailSpesialisasiReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_DETAIL_SPESIALISASI_USER:
      return { ...state, data: payload };
    case ActionTypes.REMOVE_SELECTED_SPESIALISASI:
      return {};
    default:
      return state;
  }
};
