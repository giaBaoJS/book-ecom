import {
  CREATE_AUTHOR,
  FETCH_ALL_AUTHOR,
  GET_DETAIL_AUTHOR,
  UPDATE_AUTHOR,
} from "../constants";

let initialState = {
  authors: [],
  authorDetail: [],
};

export const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_AUTHOR:
      return {
        ...state,
        authors: action.payload,
      };
    case GET_DETAIL_AUTHOR:
      return {
        ...state,
        authorDetail: action.payload,
      };
    case CREATE_AUTHOR:
      return { ...state, jobs: action.payload };
    case UPDATE_AUTHOR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
