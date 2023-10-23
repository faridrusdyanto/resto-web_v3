import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Home from "../views/home";

const AuthenticationRoutes = (isLoggedIn) => [
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: '/allmeals',
  //   element: <Allfoods />,
  // },
  // {
  //   path: '/checkout',
  //   element: <Checkout />,
  // },
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
