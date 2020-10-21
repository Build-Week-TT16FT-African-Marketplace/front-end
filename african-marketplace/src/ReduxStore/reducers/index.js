import { combineReducers } from "redux";
import { fetchUserData } from "./fetchUserReducer";
import { fetchItems } from "./fetchItemsReducer";

export default combineReducers({
  fetchUserData,
  fetchItems,
});
