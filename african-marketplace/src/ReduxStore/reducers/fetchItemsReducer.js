import {
  FETCH_ITEMS_DATA,
  FETCH_ITEMS_DATA_SUCCESS,
  FETCH_ITEMS_DATA_ERROR,
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  UPDATE_ITEM_SUCCESS,
  DEL_POST, 
  DEL_POST_SUCCESS,
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

export const fetchItems = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ITEMS_DATA:
      return {
        ...initialState,
        isLoading: true,
      };
    case FETCH_ITEMS_DATA_SUCCESS:
      return {
        ...initialState,
        forSale: payload,
      };
    case FETCH_ITEMS_DATA_ERROR:
      return {
        ...initialState,
        error: payload,
      };
      case ADD_ITEM_START:
        console.log(state.forSale)
        return {
          ...state,
        };

    case ADD_ITEM_SUCCESS:
      console.log(payload)
      return {
        ...state,
        forSale: [payload, ...state.forSale],
        error: "",
      };

    case ADD_ITEM_ERROR:
      return {
        forSale: state.forSale,
        error: payload,
      };

    case UPDATE_ITEM_SUCCESS:
      const updatedIndex = state.forSale.findIndex(
        (obj) => obj.id === payload.id
      );
      state.forSale.splice(updatedIndex, 1);
      return {
        ...state,
        forSale: [payload, ...state.forSale],
      };
      case DEL_POST_SUCCESS:
        return {
          ...state,
          user: {
            ...state.user,
            forSale: state.user.items.map((list) => {
              if (list.id === payload.id) {
                const newList = list.items.filter(function (item) {
                  return item.name !== payload.name;
                });
                return newList;
              } else return list;
            }),
          },
        };

    default:
      return state;
  }
};
