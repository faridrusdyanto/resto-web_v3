import React from "react";
import routers from "./router-data";
import { Route, Routes } from "react-router-dom";
import Menu from "../views/menu";

export default function Routerlement() {
  return routers.map((x, i) => {
    return (
      <Routes key={i}>
        <Route
          path={x.path}
          loader={({ params }) => {
            console.log(params["lang"]); // "en"
          }}
          element={x.element}
        />
      </Routes>
    );
  });
}
