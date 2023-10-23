import "./App.css";
import Navbar from "./components/reusables/Navbar";
import ScrollToTop from "./components/reusables/ScrollToTop";
import Routerlement from "./router/router-element";
import theme from "./theme";
import Footer from "./components/reusables/Footer";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  // return <Routerlement />;
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <Navbar />
      <Routerlement />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
