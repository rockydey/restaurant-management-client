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
        element: <ViewFoodDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
      },
      {
        path: "/gallery",
        element: <Gallery />,
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
