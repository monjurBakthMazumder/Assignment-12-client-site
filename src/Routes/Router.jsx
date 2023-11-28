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
import AdminDashboard from "../Pages/Dashboard/DashboardAdminPages/AdminDashboard/AdminDashboard";
import ManageUsers from "../Pages/Dashboard/DashboardAdminPages/ManageUsers/ManageUsers";
import ApprovedPremium from "../Pages/Dashboard/DashboardAdminPages/ApprovedPremium/ApprovedPremium";
import ApprovedContactRequest from "../Pages/Dashboard/DashboardAdminPages/ApprovedContactRequest/ApprovedContactRequest";
import SuccessStory from "../Pages/Dashboard/DashboardAdminPages/SuccessStory/SuccessStory";
import BioDataDetails from "../Pages/BioDataDetails/BioDataDetails";
import Checkout from "../Pages/Checkout/Checkout/Checkout";
import AdminRoute from "./AdminRoute";

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
        path: "/biodatas/details/:id",
        element: (
          <PrivateRoute>
            <BioDataDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/biodatas/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
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
      // normal user routes
      
      {
        path: "/dashboard/view-bioData",
        element: (
          <PrivateRoute>
            <ViewBioData />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/edit-bioData",
        element: (
          <PrivateRoute>
            <EditBioData />
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
      // admin only routes
      {
        path: "/dashboard/admin",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/menage-users",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <ManageUsers />
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/approved-premium",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <ApprovedPremium />
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/approved-contact-request",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <ApprovedContactRequest />
            </PrivateRoute>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/success-story",
        element: (
          <AdminRoute>
            <PrivateRoute>
              <SuccessStory />
            </PrivateRoute>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default Router;
