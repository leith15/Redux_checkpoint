import { ADD, DELETE, DONE, EDIT } from "./ActionType";
export const addTask = (payload) => {
  return {
    type: ADD,
    payload,
  };
};
export const deleteTask = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};
export const doneTask = (payload) => {
  return {
    type: DONE,
    payload,
  };
};
export const editTask = (payload) => {
  return {
    type: EDIT,
    payload,
  };
};
