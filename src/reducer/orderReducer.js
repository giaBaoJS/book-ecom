import { PLACE_ORDER } from "../constants";

let initialState = {
  orders: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return {
        ...state,
      };

    default:
      return state;
  }
};
