import { createBrowserRouter } from "react-router-dom";
import { homeLoader } from "../service/homeServices";
import ErrorPage from "../views/pages/errors/ErrorPage";
import Home from "../views/pages/home";
import Root from "../views/pages/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <Home />, loader: homeLoader }],
  },
]);
