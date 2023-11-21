import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Link,
  Box,
  makeStyles,
} from "@material-ui/core";

import { Link as RouterLink, useLocation, useRoutes } from "react-router-dom";

import CartSection from "../layout/Header/CartSection";
import { useSelector } from "react-redux";
import ArrowLeftOutlined from "@material-ui/icons/ArrowBackIos";

const headersData = (path) => [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Food",
    href: "/foods",
  },
  {
    label: "Drink",
    href: "/drinks",
  },
  {
    label: "Appetizer",
    href: "/appetizer",
  },
];

const useStyles = makeStyles({
  header: (props) => ({
    backgroundColor: "transparent",
    position: props.pathname === "/" ? "absolute" : "static",
    display: props.pathname === "/login" ? "none" : "block",
    top: 0,
    left: 0,
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingRight: "79px",
    paddingLeft: "98px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  }),
  logo: {
    fontFamily: "Mulish, sans-serif",
    fontWeight: 600,
    color: "black",
    textAlign: "left",
    fontSize: "1.4rem",
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
  },
  menuButton: {
    fontWeight: "bold",
    size: "18px",
    marginLeft: "20px",
    textTransform: "capitalize",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logButtons: {
    display: "flex",
  },
  signinButton: {
    borderRadius: "20px",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  loginButton: {
    fontWeight: "bold",
    marginLeft: "20px",
    borderRadius: "20px",
    backgroundColor: "white",
    textTransform: "capitalize",
  },
  spacerLogo: {
    visibility: "hidden",
    width: "calc(100vw - 206px)",
    border: "1px solid red",
    marginRight: "-25px",
  },
  personIcon: {
    marginRight: "6px",
  },
});

export default function Navbar() {
  const routes = useLocation();
  const { trollyItems } = useSelector((state) => state.trollyReducers);
  const location = useLocation();
  let visibleBudge = routes?.pathname !== "/trolly";

  const { header, logo, menuButton, toolbar, logButtons } = useStyles(location);

  const [state, setState] = useState({
    mobileView: true,
  });

  const { mobileView } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
        <div>
          <CartSection
            introllength={visibleBudge ? trollyItems?.product?.length : 0}
          />
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    return (
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100vw",
          marginRight: 0,
        }}
      >
        <Box display="flex" alignItems="center">
          <div>{femmecubatorLogo}</div>
        </Box>
        <Box>
          <CartSection
            introllength={visibleBudge ? trollyItems?.product?.length : 0}
          />
        </Box>
      </Toolbar>
    );
  };

  const femmecubatorLogo = (
    <Link
      {...{
        component: RouterLink,
        to: "/",
        color: "inherit",
        style: { textDecoration: "none" },
      }}
      className={logo}
    >
      {routes.pathname !== "/" && <ArrowLeftOutlined />}
      <span>Farid Resto</span>
    </Link>
  );

  const getMenuButtons = () => {
    const { pathname } = useLocation();

    return headersData(pathname).map(({ label, href }, index) => {
      return (
        <Button
          key={index}
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
          state={{ from: pathname, show: "login" }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar elevation={0} className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
