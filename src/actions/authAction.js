import * as api from "../api";
import { LOGIN, LOGOUT, REGISTER } from "../constants";

export const login = (loginModel) => async (dispatch) => {
  try {
    const { data } = await api.login(loginModel);
    localStorage.setItem("token", data.token);
    localStorage.setItem("expiration", data.expiration);
    localStorage.setItem("user", JSON.stringify(data.user));
    dispatch({
      type: LOGIN,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("user");
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const register = (profileUser) => async (dispatch) => {
  try {
    const { data } = await api.register(profileUser);
    dispatch({
      type: REGISTER,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
