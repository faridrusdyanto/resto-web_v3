import { createBrowserRouter } from "react-router-dom";
import Routerlement from "./router-element";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Routerlement />,
  },
]);

export default router;
