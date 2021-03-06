import { ActionTypes } from "redux/constants/actionTypes";

export const setCoursesDetail = (data) => {
  return {
    type: ActionTypes.SET_DETAIL_COURSES_USER,
    payload: data,
  };
};

export const removeSelectedCourses = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_COURSES,
  };
};

export const setComments = (data) => {
  return {
    type: ActionTypes.SET_COMMENTS,
    payload: data,
  };
};

export const removeSelectedComments = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_COMMENTS,
  };
};
