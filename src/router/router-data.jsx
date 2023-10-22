import Home from "../views/home";
import Menu from "../views/menu";

const routers = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
];

export default routers;
