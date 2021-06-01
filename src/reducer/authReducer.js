import {
  LOGIN,
  LOGOUT,
  SET_STATE_FROM_LOCAL,
  REGISTER,
  UPDATE_USER,
} from "../constants";

let initialState = {
  token: null,
  expiration: null,
  user: null,
  userEdit: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        expiration: action.payload.expiration,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        expiration: null,
        user: null,
      };
    case SET_STATE_FROM_LOCAL:
      return {
        ...state,
        token: localStorage.getItem("token"),
        expiration: localStorage.getItem("expiration"),
        user: JSON.parse(localStorage.getItem("user")),
      };
    case REGISTER:
      return {
        ...state,
      };
    case UPDATE_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
