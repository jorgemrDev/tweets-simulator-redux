import { combineReducers } from "redux";
import modalsReducers from "./modalsReducers";

export default combineReducers({
  modals: modalsReducers,
});
