import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

import ScrollToTop from "./components/reusables/ScrollToTop";
import Navbar from "./components/reusables/Navbar";
import ThemeRoutes from "./router";

import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <Navbar />
      <ThemeRoutes />
    </ThemeProvider>
  );
}

export default App;
