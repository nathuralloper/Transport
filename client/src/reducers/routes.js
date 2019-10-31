import {
  ROUTES_CREATE,
  ERROR_CREATING_ROUTE,
  ROUTES_LIST,
  ERROR_LIST_ROUTES,
  GETTING_ROUTES_BY_ID,
  ERROR_GETTING_ROUTES_BY_ID,
  ROUTES_DELETE,
  ERROR_DELETE_ROUTES
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
    case ROUTES_LIST:
      return {
        ...state,
        error: null,
        items: payload,
        loading: false
      };

    case GETTING_ROUTES_BY_ID:
      return {
        ...state,
        item: payload
      };

    case ROUTES_CREATE:
      return {
        ...state,
        error: null,
        items: [...state.items, payload],
        loading: false
      };

    case ROUTES_DELETE:
      return {
        ...state,
        error: null,
        items: state.items.filter(item => item._id !== action.payload)
      };

    case ERROR_CREATING_ROUTE:
    case ERROR_LIST_ROUTES:
    case ERROR_GETTING_ROUTES_BY_ID:
    case ERROR_DELETE_ROUTES:
      return {
        ...state,
        error: true,
        loading: false
      };

    default:
      return state;
  }
}
