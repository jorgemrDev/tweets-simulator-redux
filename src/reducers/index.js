import { combineReducers } from "redux";
import modalsReducers from "./modalsReducers";
import validationsReducer from "./validationsReducer";
import tweetsReducer from "./tweetsReducer";

export default combineReducers({
  modals: modalsReducers,
  validations: validationsReducer,
  tweets: tweetsReducer,
});
