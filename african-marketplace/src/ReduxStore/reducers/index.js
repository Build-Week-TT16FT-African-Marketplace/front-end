import { combineReducers } from "redux";
import { fetchUserData } from "./fetchUserDataReducer";
import { fetchItems } from "./fetchItemsReducer";

export default combineReducers({
  fetchUserData,
  fetchItems,
});
