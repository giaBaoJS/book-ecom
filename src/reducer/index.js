import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import { authorReducer } from "./authorReducer";
import { categoryReducer } from "./categoryReducer";
import { authReducer } from "./authReducer";
import { orderReducer } from "./orderReducer";
import { modalFormReducer } from "./modalFormReducer";
export default combineReducers({
  authorReducer,
  bookReducer,
  categoryReducer,
  authReducer,
  orderReducer,
  modalFormReducer,
});
