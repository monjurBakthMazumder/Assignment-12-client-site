import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hock/UseAuth";
import useAdmin from "../Hock/useAdmin";
import PropTypes from 'prop-types';
import Loading from "../Component/Loading/Loading";


const UserRoute = ({ children }) => {
    const { user, isLoading } = UseAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (isLoading || isAdminLoading) {
        return <Loading/>
    }

    if (user && !isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

UserRoute.propTypes = {
    children : PropTypes.node
};

export default UserRoute;