import axios from "axios";
import { setAlert } from "./alert";
import { LOGIN_SUCCESS, LOGIN_FAIL, USER_LOADED, AUTH_ERROR } from "./types";
import setAuthToken from "../utils/setAuthToken";

//Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const res = await axios.get("/api/auth");
  console.log(res);
  try {
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: res.data
    });
  }
};

//Login User
export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  console.log(email);
  console.log(password);
  const body = JSON.stringify({ email, password });
  console.log(body);
  try {
    const res = await axios.post("api/auth", body, config);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({ type: LOGIN_FAIL });
  }
};
