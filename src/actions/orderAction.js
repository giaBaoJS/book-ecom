import * as api from "../api";
import { PLACE_ORDER } from "../constants";
export const placeOrder = (order) => async (dispatch) => {
  try {
    await api.placeOrder(order);
    dispatch({
      type: PLACE_ORDER,
    });
  } catch (error) {
    console.log(error.message);
  }
};
