import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Recipes from "../pages/Recipes/Recipes";
import PrivateRoute from "./PrivateRoutes";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/chefs/:id",
          element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
          loader:({params})=> fetch(`https://food-hub-server-4ugh75mru-shafiul-islam-nobels-projects.vercel.app/chefs/${params.id}`)
        },
        {
          path: "*",
          element:<NotFound></NotFound>
        },
      ],
    },
  ]);
  
export default router;