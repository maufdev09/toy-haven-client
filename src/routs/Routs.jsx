import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import AddAToy from "../pages/AddAToy/AddAToy";
import DetailsToy from "../pages/DetailsToy/DetailsToy";
import PrivateRoutes from "./PrivateRoutes";
import AllToys from "../pages/AllToys/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "addatoy",
        element: <AddAToy></AddAToy>,
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "toy/:id",
        element: (
          <PrivateRoutes>
            <DetailsToy></DetailsToy>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
      },
    ],
  },
]);

export default router;
