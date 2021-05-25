import * as api from "../api";
import { FETCH_ALL_AUTHOR } from "../constants/index";
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
