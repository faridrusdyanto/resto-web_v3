import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";

import MainRoutes from "./Mainroutes";

export default function ThemeRoutes() {
  const authed = useSelector((state) => state.authReducer.authenticated);

  return useRoutes(MainRoutes(authed));
}
