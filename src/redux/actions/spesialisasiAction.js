import { ActionTypes } from "redux/constants/actionTypes";

export const setSpesialisasi = (data) => {
  return {
    type: ActionTypes.SET_DETAIL_SPESIALISASI_USER,
    payload: data,
  };
};
export const removeSelectedSpesialisasi = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_SPESIALISASI,
  };
};
