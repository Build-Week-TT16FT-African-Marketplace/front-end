import {
  FETCH_ITEMS_DATA,
  FETCH_ITEMS_DATA_SUCCESS,
  FETCH_ITEMS_DATA_ERROR,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  UPDATE_ITEM_SUCCESS,
} from "../actions";

const initialState = {
  forSale: [],
  newItem: {
    name: '',
    description: '',
    price: '',
    location: '',
    category: '',
  },
  isLoading: false,
  error: "",
};

export const fetchItems = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_DATA:
      return {
        ...initialState,
        isLoading: true,
      };
    case FETCH_ITEMS_DATA_SUCCESS:
      return {
        ...initialState,
        forSale: action.payload,
      };
    case FETCH_ITEMS_DATA_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };

    case ADD_ITEM_SUCCESS:
      return {
        forSale: [action.payload, ...state.forSale],
        newItem: action.payload,
        error: "",
      };

    case ADD_ITEM_ERROR:
      return {
        forSale: state.forSale,
        error: action.payload,
      };

    case UPDATE_ITEM_SUCCESS:
      const updatedIndex = state.forSale.findIndex(
        (obj) => obj.id === action.payload.id
      );
      state.forSale.splice(updatedIndex, 1);
      return {
        ...state,
        forSale: [action.payload, ...state.forSale],
      };

    default:
      return state;
  }
};
