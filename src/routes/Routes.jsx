import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllVisas from "../pages/AllVisas";
import AddVisa from "../pages/AddVisa";
import PrivateRoute from "./PrivateRoute";
import VisaDetails from "../pages/VisaDetails";
import MyVisaApplication from "../pages/MyVisaApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/all-visas",
        element: <AllVisas />,
      },
      {
        path: "/add-visa",
        element: (
          <PrivateRoute>
            <AddVisa />
          </PrivateRoute>
        ),
      },
      {
        path: "/visa/:id",
        element: (
          <PrivateRoute>
            <VisaDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-visa-application",
        element: (
          <PrivateRoute>
            <MyVisaApplication />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
