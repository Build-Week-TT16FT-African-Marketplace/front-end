import axiosWithAuth from "../../utils/axiosWithAuth";

export const FETCH_ITEMS_DATA = "FETCH_ITEMS_DATA";
export const FETCH_ITEMS_DATA_SUCCESS = "FETCH_ITEMS_DATA_SUCCESS";
export const FETCH_ITEMS_DATA_ERROR = "FETCH_ITEMS_DATA_ERROR";
export const ADD_ITEM_START = "ADD_ITEM_START"
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_ERROR = "ADD_ITEM_ERROR";
export const UPDATE_ITEM_START = "UPDATE_ITEM_START";
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";
export const UPDATE_ITEM_ERROR = "UPDATE_ITEM_ERROR";
export const DEL_ITEM_START = "DEL_ITEM_START"
export const DEL_ITEM_SUCCESS = "DEL_ITEM_SUCCESS"
export const DEL_ITEM_ERROR = "DEL_ITEM_ERROR"

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

export const addProduct = (formValues, setFormVal, initVal) => (dispatch) => {
  dispatch({ type: ADD_ITEM_START });
  axiosWithAuth()
    .post(`/items/additem`, formValues)
    .then((res) => {
      dispatch({ type: ADD_ITEM_SUCCESS, payload: res.data });
      fetchItems();
    })
    .catch((err) => {
      dispatch({ type: ADD_ITEM_ERROR, payload: err });
    })
    .finally(() => setFormVal(initVal));
};

  export const deleteProduct = (id) => (dispatch) => {
    dispatch({type:DEL_ITEM_START})
    axiosWithAuth()
      .delete(`/items/${id}`)
      .then((res) => {
        dispatch({ type: DEL_ITEM_SUCCESS, payload: res.data });
        fetchItems();
      })
      .catch((err) => {
        dispatch({ type: DEL_ITEM_ERROR, payload: err });
      })
  };

export const updateProduct = (id, formValues) => (dispatch) => {
  console.log("this is the id you are targetting:", id)
  dispatch({type:UPDATE_ITEM_START})
    axiosWithAuth()
      .put(`/items/${id}`, formValues)
      .then((res) => {
        // res.data.id = parseInt(res.data.id);
        dispatch({ type: UPDATE_ITEM_SUCCESS, payload: formValues });
      })
      .catch((err) => {
        dispatch({ type: UPDATE_ITEM_ERROR, payload: err });
      });
  };
