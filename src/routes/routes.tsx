import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Layout = () => {
  return<>
    <Navbar />
    <Outlet />
    <Footer />
  </>
}


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Navigate to="/register" replace />,
  // },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  
]);


export default router;