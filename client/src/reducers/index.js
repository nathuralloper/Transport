import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import routes from "./routes";
import station from "./station";
import bus from "./bus";
import driver from "./driver";

export default combineReducers({
  alert,
  auth,
  routes,
  station,
  bus,
  driver
});
