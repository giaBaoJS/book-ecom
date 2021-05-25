import * as api from "../api";
import {
  FETCH_ALL_BOOK,
  GET_DETAIL_BOOK,
  GET_BOOK_BY_FILTER,
  ADD_BOOK_IN_CART,
  GET_BOOK_IN_CART,
  DELETE_BOOK_IN_CART,
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
// export const getDataHomePage = () => async (dispatch) => {
//   try {
//     const { data: databyDate } = await api.fetchJobsOrderBy(1);
//     const { data: databySalary } = await api.fetchJobsOrderBy(3);
//     dispatch({
//       type: FETCH_ALL_JOB,
//       payload: {
//         databyDate: databyDate.items,
//         databySalary: databySalary.items,
//       },
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const getJobsById = (id) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(
//         "https://6098e31e99011f001713f9b5.mockapi.io/user/1"
//       );
//       dispatch({
//         type: GET_JOB_BY_ID,
//         payload: data,
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

// export const createJob = (createModel, errorHandler) => async (dispatch) => {
//   try {
//     const { data } = await api.createJob(createModel);
//     dispatch({
//       type: TURN_OFF_MODAL,
//     });
//     dispatch({
//       type: CREATE_JOB,
//       payload: data,
//     });
//   } catch (error) {
//     if (errorHandler) console.log(error.message);
//   }
// };

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
