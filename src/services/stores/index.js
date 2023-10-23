import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducer";

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cartReducer", "authReducer"],
};

const PersistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  PersistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistedStore = persistStore(store);

export { store, persistedStore };
