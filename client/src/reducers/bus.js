import {
  BUS_LIST,
  ERROR_BUS_LIST,
  BUS_CREATE,
  ERROR_BUS_CREATE,
  BUS_DELETE,
  ERROR_DELETE_BUS
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
    case BUS_LIST:
      return {
        ...state,
        error: null,
        items: payload,
        loading: false
      };

    case BUS_CREATE:
      return {
        ...state,
        error: null,
        items: [...state.items, payload],
        loading: false
      };

    case BUS_DELETE:
      return {
        ...state,
        error: null,
        items: state.items.filter(item => item._id !== action.payload)
      };

    case ERROR_BUS_CREATE:
    case ERROR_BUS_LIST:
    case ERROR_DELETE_BUS:
      return {
        ...state,
        error: true,
        loading: false
      };

    default:
      return state;
  }
}
