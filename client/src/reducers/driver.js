import {
  DRIVER_LIST,
  ERROR_DRIVER_LIST,
  DRIVER_CREATE,
  ERROR_DRIVER_CREATE,
  DRIVER_DELETE,
  ERROR_DELETE_DRIVER
} from "../action/types";

const initialState = {
  items: [],
  error: null,
  item: {},
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DRIVER_LIST:
      return {
        ...state,
        error: null,
        items: payload,
        loading: false
      };

    case DRIVER_CREATE:
      return {
        ...state,
        error: null,
        items: [...state.items, payload],
        loading: false
      };

    case DRIVER_DELETE:
      return {
        ...state,
        error: null,
        items: state.items.filter(item => item._id !== action.payload)
      };

    case ERROR_DRIVER_CREATE:
    case ERROR_DRIVER_LIST:
    case ERROR_DELETE_DRIVER:
      return {
        ...state,
        error: true,
        loading: false
      };

    default:
      return state;
  }
}
