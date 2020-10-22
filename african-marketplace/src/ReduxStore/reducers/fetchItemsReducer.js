import {
  FETCH_ITEMS_DATA,
  FETCH_ITEMS_DATA_SUCCESS,
  FETCH_ITEMS_DATA_ERROR,
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  UPDATE_ITEM_START,
  UPDATE_ITEM_SUCCESS,
  DEL_ITEM_START, 
  DEL_ITEM_SUCCESS,
} from "../actions";

const initialState = {
  forSale: [],
  Item: {
    name: '',
    description: '',
    price: '',
    location: '',
    category: '',
    id: '',
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

      case UPDATE_ITEM_START:
      console.log("update start:", state.forSale)
      return {
        ...state
      }

    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        forSale: state.forSale.map(item => {
          if(item.id!== payload.id) {
            return item;
          } else {
            return payload;
          }
        }),
      };
      // case DEL_ITEM_SUCCESS:
      //   return {
      //     ...state,
      //     user: {
      //       ...state.user,
      //       forSale: state.user.items.map((list) => {
      //         if (list.id === payload.id) {
      //           const newList = list.items.filter(function (item) {
      //             return item.name !== payload.name;
      //           });
      //           return newList;
      //         } else return list;
      //       }),
      //     },
      //   };

    default:
      return state;
  }
};
