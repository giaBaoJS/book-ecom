import AuthorForm from "../components/AdminComponents/HOC/AuthorForm";
import CategoryForm from "../components/AdminComponents/HOC/CategoryForm";
import {
  CLOSE_MODAL,
  MODALFORM_ADD_AUTHOR,
  MODALFORM_EDIT_AUTHOR,
} from "../constants";

const isOpenModal = true;
let initialState = {
  type: MODALFORM_ADD_AUTHOR,
  payload: null,
  Component: AuthorForm,
  isOpenModal: false,
};

export const modalFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODALFORM_ADD_AUTHOR:
    case MODALFORM_EDIT_AUTHOR:
      return { ...action, Component: AuthorForm, isOpenModal };
    case CLOSE_MODAL:
      return { initialState };
    default:
      return { ...state };
  }
};
