import * as api from "../api";
import { FETCH_ALL_CATEGORY } from "../constants/index";
export const getAllCategory = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategories();
    dispatch({
      type: FETCH_ALL_CATEGORY,
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
