import { combineReducers } from "redux";
import menuReducers from "./menu.reducers";
import trollyReducers from "./trolly.reducers";

const rootReducer = combineReducers({
  menuReducers,
  trollyReducers,
});

export default rootReducer;
