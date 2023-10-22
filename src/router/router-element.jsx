import routers from "./router-data";
import { Route, Routes } from "react-router-dom";

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
