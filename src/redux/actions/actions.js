import { WATCH, UNWATCH, DELETE, ADD_MOVIE } from "./actionTypes";

export const watch = movie => {
  return {
    type: "WATCH",
    payload: movie
  };
};
export const unwatch = movie => {
  return {
    type: UNWATCH,
    payload: movie
  };
};
export const deleteMovie = movie => {
  return {
    type: DELETE,
    payload: movie
  };
};

export const addMovie = movie => {
  return {
    type: ADD_MOVIE,
    payload: movie
  };
};

export const deleteAll = () => {
  return {
    type: "DELETE_ALL"
  };
};
