import {
  CREATE_CATEGORY,
  FETCH_ALL_CATEGORY,
  UPDATE_CATEGORY,
} from "../constants";

let initialState = {
  categories: [],
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case CREATE_CATEGORY:
      return { ...state, jobs: action.payload };
    case UPDATE_CATEGORY:
      return {
        ...state,
      };
    default:
      return state;
  }
};
