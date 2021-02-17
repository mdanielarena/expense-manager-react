import { USER_LISTS, USER_LISTS_LOADING } from "../actions/types";

const initialState = {
  user_lists: null,
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LISTS_LOADING:
      return { ...state, isLoading: true };
    case USER_LISTS:
      return {
        ...state,
        isLoading: false,
        user_lists: action.payload,
      };
    default:
      return state;
  }
};
