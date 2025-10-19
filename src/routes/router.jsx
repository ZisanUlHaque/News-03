import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../components/pages/Home";
import CategoryNews from "../components/pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
        {
            path: "",
            element: <Home></Home>
        },
        {
            path: '/category/:id',
            element:<CategoryNews></CategoryNews>
        }
    ]
  },
  {
    path: '/auth',
    element: <h2>Auth</h2>
  },
  {
    path: '/news',
    element: <h2>News</h2>
  },
  {
    path: '/*',
    element: <h2>Error</h2>
  },
]);


export default router