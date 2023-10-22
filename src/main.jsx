import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.jsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import './App.css';

createRoot(document.getElementById("root")).render(
  // <ThemeProvider theme={theme}>
  <RouterProvider router={router} />
// </ThemeProvider>
);
