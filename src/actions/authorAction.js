import { notification } from "antd";
import * as api from "../api";
import {
  CLOSE_MODAL,
  FETCH_ALL_AUTHOR,
  GET_DETAIL_AUTHOR,
} from "../constants/index";

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

export const deleteAuthor = async (id) => {
  try {
    await api.deleteAuthor(id);
  } catch (error) {
    console.log(error.message);
  }
};

export const createAuthor = (payload) => async (dispatch) => {
  try {
    await api.createAuthor(payload);
    await dispatch(getAllAuthor());
    dispatch({
      type: CLOSE_MODAL,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAuthor = (id, payload) => async (dispatch) => {
  try {
    await api.updateAuthor(id, payload);
    await dispatch(getAllAuthor());
    dispatch({
      type: CLOSE_MODAL,
    });
  } catch (error) {
    console.log(error.message);
  }
};
