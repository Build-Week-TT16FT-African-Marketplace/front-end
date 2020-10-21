import {
  FETCH_USER_DATA,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_ERROR,
} from "../actions";

const initialState = {
  users: ["nunya", "bidness"],
  isLoading: false,
  error: "",
};

export const fetchUserData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_USER_DATA_SUCCESS:
      return {
        ...initialState,
        users: action.payload,
      };

    case FETCH_USER_DATA_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };

    default:
      return state;
  }
};
