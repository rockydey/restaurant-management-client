import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import AllFoods from "../../pages/AllFoods/AllFoods";
import Gallery from "../../pages/Gallery/Gallery";
import Contact from "../../pages/Contact/Contact";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ViewFoodDetails from "../../pages/ViewFoodDetails/ViewFoodDetails";
import Purchase from "../../pages/Purchase/Purchase";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-foods",
        element: <AllFoods />,
      },
      {
        path: "/view-details/:id",
        element: (
          <PrivateRoute>
            <ViewFoodDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <Purchase />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: "/gallery",
        element: <Gallery />,
        loader: () => fetch("http://localhost:5000/feedbacks"),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
