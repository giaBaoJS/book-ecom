import {
  ADD_BOOK_IN_CART,
  ADD_BOOK_IN_WISHLIST,
  CREATE_BOOK,
  DELETE_BOOK_IN_CART,
  DELETE_BOOK_IN_WISHLIST,
  FETCH_ALL_BOOK,
  GET_BOOK_BY_FILTER,
  GET_BOOK_IN_CART,
  GET_BOOK_IN_WISHLIST,
  GET_DETAIL_BOOK,
  LOGOUT,
  UPDATE_BOOK,
} from "../constants";

let initialState = {
  books: [],
  bookDetail: [],
  booksInCart: [],
  booksInWishList: [],
  subTotalInCart: 0,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        booksInCart: [],
        subTotalInCart: 0,
      };
    case FETCH_ALL_BOOK:
      return {
        ...state,
        books: action.payload.data,
      };
    case GET_BOOK_BY_FILTER:
      return {
        ...state,
        bookbyFilter: action.payload,
      };
    case GET_DETAIL_BOOK:
      return {
        ...state,
        bookDetail: action.payload,
      };
    case GET_BOOK_IN_CART:
      return {
        ...state,
        booksInCart: action.payload.data,
        subTotalInCart: action.payload.subtotal,
      };
    case ADD_BOOK_IN_CART: {
      let booksInCart = [...state.booksInCart, action.payload];
      let subTotalInCart = booksInCart.reduce(
        (total, item) => (total += item.subTotal),
        0
      );
      return { ...state, booksInCart, subTotalInCart };
    }
    case DELETE_BOOK_IN_CART: {
      let booksInCart = state.booksInCart.filter(
        (book) => book.id !== action.payload
      );
      let subTotalInCart = booksInCart.reduce(
        (total, item) => (total += item.subTotal),
        0
      );
      return {
        ...state,
        booksInCart,
        subTotalInCart,
      };
    }
    case GET_BOOK_IN_WISHLIST:
      return {
        ...state,
        booksInWishList: action.payload,
      };
    case ADD_BOOK_IN_WISHLIST:
      return {
        ...state,
      };
    case DELETE_BOOK_IN_WISHLIST:
      return {
        ...state,
        booksInWishList: state.booksInWishList.filter(
          (book) => book.id !== action.payload
        ),
      };
    case UPDATE_BOOK:
      return {
        ...state,
      };
    default:
      return state;
  }
};
