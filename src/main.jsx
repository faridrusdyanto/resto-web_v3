import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { persistedStore, store } from "./services/stores";

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<p>loading</p>} persistor={persistedStore}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
