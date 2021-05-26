import * as api from "../api";
import { FETCH_ALL_AUTHOR, GET_DETAIL_AUTHOR } from "../constants/index";

export const getAllAuthor = () => async (dispatch) => {

  try {
    const { data } = await api.fetchAuthors();
    dispatch({
      type: FETCH_ALL_AUTHOR,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const getAuthorById = (id) => async (dispatch) => {
    try {
    const { data } = await api.getAuthorById(id);
    dispatch({
      type: GET_DETAIL_AUTHOR,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
