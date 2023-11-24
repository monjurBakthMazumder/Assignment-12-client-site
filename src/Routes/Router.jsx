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

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/biodatas',
                element: <BioData/>
            },
            {
                path: '/about-us',
                element: <AboutUs/>
            },
            {
                path: '/contact-us',
                element: <ContactUs/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/registration',
        element: <Registration/>
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>
    }
])

export default Router;