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
import AddFoods from "../../pages/AddFoods/AddFoods";
import OrderedFoods from "../../pages/OrderedFoods/OrderedFoods";
import MyFoods from "../../pages/MyFoods/MyFoods";
import Payment from "../../pages/Payment/Payment";

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
          fetch(
            `https://restaurant-management-server-nine.vercel.app/foods/${params.id}`,
            {
              credentials: "include",
            }
          ),
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <Purchase />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-server-nine.vercel.app/foods/${params.id}`,
            {
              credentials: "include",
            }
          ),
      },
      {
        path: "/gallery",
        element: <Gallery />,
        loader: () =>
          fetch(
            "https://restaurant-management-server-nine.vercel.app/feedbacks"
          ),
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
      {
        path: "/my-foods",
        element: (
          <PrivateRoute>
            <MyFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/ordered-foods",
        element: (
          <PrivateRoute>
            <OrderedFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
