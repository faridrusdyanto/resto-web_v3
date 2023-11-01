import { combineReducers } from "redux";
import menuReducers from "./menu.reducers";

const rootReducer = combineReducers({
  menuReducers,
});

export default rootReducer;
