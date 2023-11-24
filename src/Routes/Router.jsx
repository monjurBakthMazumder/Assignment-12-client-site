import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import BioData from "../Pages/BioData/BioData/BioData";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import DashboardLayout from "../Layout/DashboardLayout";
import ViewBioData from "../Pages/Dashboard/DashboardPages/ViewBioData/ViewBioData";
import EditBioData from "../Pages/Dashboard/DashboardPages/EditBioData/EditBioData";
import MyContactRequest from "../Pages/Dashboard/DashboardPages/MyContactRequest/MyContactRequest";
import GotMarried from "../Pages/Dashboard/DashboardPages/GotMarried/GotMarried";
import FavoritesBioData from "../Pages/Dashboard/DashboardPages/FavoritesBioData/FavoritesBioData";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/biodatas",
        element: <BioData />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/edit-bioData",
        element: (
          <PrivateRoute>
            <EditBioData />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/view-bioData",
        element: (
          <PrivateRoute>
            <ViewBioData />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-contact-request",
        element: (
          <PrivateRoute>
            <MyContactRequest />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/favorites-bioData",
        element: (
          <PrivateRoute>
            <FavoritesBioData />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/got-married",
        element: (
          <PrivateRoute>
            <GotMarried />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
