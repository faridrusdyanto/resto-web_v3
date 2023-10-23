import React, { useEffect } from "react";
import dotenv from "dotenv";
import { ThemeProvider } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import "./App.css";

import ScrollToTop from "./components/reusables/ScrollToTop";
import Navbar from "./components/reusables/Navbar";
import Footer from "./components/reusables/Footer";
import ThemeRoutes from "./router";

import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <Navbar />
      <ThemeRoutes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
