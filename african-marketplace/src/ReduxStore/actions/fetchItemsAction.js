import axiosWithAuth from "../../utils/axiosWithAuth";

export const FETCH_ITEMS_DATA = "FETCH_ITEMS_DATA";
export const FETCH_ITEMS_DATA_SUCCESS = "FETCH_ITEMS_DATA_SUCCESS";
export const FETCH_ITEMS_DATA_ERROR = "FETCH_ITEMS_DATA_ERROR";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_ERROR = "ADD_ITEM_ERROR";
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";
export const UPDATE_ITEM_ERROR = "UPDATE_ITEM_ERROR";

export const fetchItems = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ITEMS_DATA });
    axiosWithAuth()
      .get("/items")
      .then((res) => {
        dispatch({ type: FETCH_ITEMS_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_ITEMS_DATA_ERROR, payload: err });
      });
  };
};

export const addProduct = (item) => {
  return (dispatch) => {
    axiosWithAuth()
      .post("/items/additem", item)
      .then((res) => {
        dispatch({ type: ADD_ITEM_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ADD_ITEM_ERROR, payload: err });
      });
  };
};

export const updateProduct = (id, data) => {
  return (dispatch) => {
    axiosWithAuth()
      .put(`/items/:${id}`, data)
      .then((res) => {
        res.data.id = parseInt(res.data.id);
        dispatch({ type: UPDATE_ITEM_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: UPDATE_ITEM_ERROR, payload: err });
      });
  };
};
