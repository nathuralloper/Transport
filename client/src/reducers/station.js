import {
  STATION_LIST,
  ERROR_STATION_LIST,
  STATION_CREATE,
  ERROR_STATION_CREATE,
  STATION_DELETE,
  ERROR_DELETE_STATION
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
    case STATION_LIST:
      return {
        ...state,
        error: null,
        items: payload,
        loading: false
      };

    case STATION_CREATE:
      return {
        ...state,
        error: null,
        items: [...state.items, payload],
        loading: false
      };

    case STATION_DELETE:
      return {
        ...state,
        error: null,
        items: state.items.filter(item => item._id !== action.payload)
      };

    case ERROR_STATION_CREATE:
    case ERROR_STATION_LIST:
    case ERROR_DELETE_STATION:
      return {
        ...state,
        error: true,
        loading: false
      };

    default:
      return state;
  }
}
