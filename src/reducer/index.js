import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import { authorReducer } from "./authorReducer";
import { categoryReducer } from "./categoryReducer";
import { authReducer } from "./authReducer";
export default combineReducers({
  authorReducer,
  bookReducer,
  categoryReducer,
  authReducer,
});
