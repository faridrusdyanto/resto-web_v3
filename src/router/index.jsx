import { createBrowserRouter } from "react-router-dom";
import Routerlement from "./router-element";
import Menu from "../views/menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routerlement/>
  },
]);

export default router;
