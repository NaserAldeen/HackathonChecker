import { WATCH, UNWATCH, DELETE, ADD_MOVIE } from "../actions/actionTypes";

const initialState = {
  watchList: localStorage.getItem("toDo")
    ? localStorage.getItem("toDo").split(",")
    : [],
  watchedList: localStorage.getItem("done")
    ? localStorage.getItem("done").split(",")
    : []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_ALL": {
      localStorage.setItem("done", "");
      return {
        ...state,
        watchedList: []
      };
    }
    case WATCH: {
      let newWatchList = state.watchList.filter(
        movie => movie !== action.payload
      );

      let newWatchedList;

      if (state.watchedList.length == 0)
        newWatchedList = state.watchedList.concat(action.payload);
      else {
        newWatchedList = [action.payload, ...state.watchedList];
      }

      localStorage.setItem("toDo", newWatchList);
      localStorage.setItem("done", newWatchedList);
      return {
        ...state,
        watchList: newWatchList,
        watchedList: newWatchedList
      };
    }
    case UNWATCH: {
      let newWatchedList = state.watchedList.filter(
        movie => movie !== action.payload
      );
      let newWatchList;

      if (state.watchList.length == 0)
        newWatchList = state.watchList.concat(action.payload);
      else {
        newWatchList = [action.payload, ...state.watchList];
      }

      localStorage.setItem("done", newWatchedList);
      localStorage.setItem("toDo", newWatchList);
      return {
        ...state,
        watchList: newWatchList,
        watchedList: newWatchedList
      };
    }
    case DELETE: {
      if (state.watchList.includes(action.payload)) {
        let newWatchList = state.watchList.filter(
          movie => movie !== action.payload
        );
        localStorage.setItem("toDo", newWatchList);
        return {
          ...state,
          watchList: newWatchList
        };
      } else {
        let newWatchedList = state.watchedList.filter(
          movie => movie !== action.payload
        );
        localStorage.setItem("done", newWatchedList);
        return {
          ...state,
          watchedList: newWatchedList
        };
      }
    }
    case ADD_MOVIE: {
      let newWatchList;
      if (state.watchList.length == 0)
        newWatchList = state.watchList.concat(action.payload);
      else {
        newWatchList = [action.payload, ...state.watchList];
      }

      localStorage.setItem("toDo", newWatchList);
      return {
        ...state,
        watchList: newWatchList
      };
    }

    default:
      return state;
  }
};
