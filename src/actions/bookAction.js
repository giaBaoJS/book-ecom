import * as api from "../api";
import {
  FETCH_ALL_BOOK,
  GET_DETAIL_BOOK,
  GET_BOOK_BY_FILTER,
  ADD_BOOK_IN_CART,
  GET_BOOK_IN_CART,
  DELETE_BOOK_IN_CART,
  ADD_BOOK_IN_WISHLIST,
  GET_BOOK_IN_WISHLIST,
  DELETE_BOOK_IN_WISHLIST,
} from "../constants/index";
export const getAllBook = () => async (dispatch) => {
  try {
    const { data: books } = await api.fetchBooks();
    dispatch({
      type: FETCH_ALL_BOOK,
      payload: {
        books: books,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getBookById = (id) => async (dispatch) => {
  try {
    const { data: bookDetail } = await api.getBookById(id);
    dispatch({
      type: GET_DETAIL_BOOK,
      payload: bookDetail,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getBooksByFilter = (querystring) => async (dispatch) => {
  try {
    const { data: bookbyFilter } = await api.fetchBooks(querystring);
    dispatch({
      type: GET_BOOK_BY_FILTER,
      payload: bookbyFilter.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addBookInCart = (obj) => async (dispatch) => {
  try {
    const { data } = await api.addBookInCart(obj);
    console.log(data);
    dispatch({
      type: ADD_BOOK_IN_CART,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getBookInCart = (id) => async (dispatch) => {
  try {
    const { data } = await api.getBookInCart(id);
    dispatch({
      type: GET_BOOK_IN_CART,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBookInCart = (id) => async (dispatch) => {
  try {
    await api.deleteBookInCart(id);
    dispatch({
      type: DELETE_BOOK_IN_CART,
      payload: id,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const addBookInWishList = (obj) => async (dispatch) => {
  try {
    
    const { data } = await api.addBookInWishList(obj);
    dispatch({
      type: ADD_BOOK_IN_WISHLIST,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getBookInWishList = (id) => async (dispatch) => {
  try {
    const { data } = await api.getBookInWishList(id);
    dispatch({
      type: GET_BOOK_IN_WISHLIST,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBookInWishList = (id) => async (dispatch) => {
  try {
    await api.deleteBookInWishList(id);
    dispatch({
      type: DELETE_BOOK_IN_WISHLIST,
      payload: id,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// export const updateJob = (id, job) => async (dispatch) => {
//   console.log(job);
//   try {
//     const { data } = await api.updateJob(id, job);
//     dispatch({
//       type: TURN_OFF_MODAL,
//     });
//     dispatch({
//       type: UPDATE_JOB,
//       payload: data,            
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
