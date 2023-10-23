import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Home from "../views/home";
import Menu from "../views/menu";
import Drink from "../views/menu/drink";
import Appetizer from "../views/menu/appetizer";
import Checkout from "../views/checkout";
import Trolly from "../views/checkout/trolly";

const AuthenticationRoutes = (isLoggedIn) => [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/foods',
    element: <Menu />,
  },
  {
    path: '/drinks',
    element: <Drink />,
  },
  {
    path: '/appetizer',
    element: <Appetizer />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/trolly',
    element: <Trolly />,
  },
  // {
  //   path: '/login',
  //   element: isLoggedIn ? <Navigate to="/profile" /> : <Login />,
  // },
  // {
  //   path: '/signout',
  //   element: <Navigate to="/" />,
  // },
  // {
  //   path: '/profile/*',
  //   element: isLoggedIn ? <Userprofile /> : <Navigate to="/login" />,
  //   children: [
  //     {
  //       path: 'details',
  //       element: <Mydetails />,
  //     },
  //     {
  //       path: 'orders',
  //       element: <Userorders />,
  //     },
  //     {
  //       path: 'o',
  //       element: <Myminiorders />,
  //     },
  //     {
  //       path: '*',
  //       element: <NotFound />,
  //     },
  //   ],
  // },
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
];

export default AuthenticationRoutes;
