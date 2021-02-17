import { USER_LISTS, USER_LISTS_LOADING } from "../actions/types";
import axios from "axios";
import { tokenConfig } from "../config";

export const userLists = () => (dispatch, getState) => {
  //user lists loading
  dispatch({ type: USER_LISTS_LOADING });
  axios.get("/api/users", tokenConfig(getState)).then((res) => {
    dispatch({
      type: USER_LISTS,
      payload: res.data,
    });
  });
};
