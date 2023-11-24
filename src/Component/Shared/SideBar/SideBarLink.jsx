import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../../Hock/UseAuth';
import Swal from 'sweetalert2';

const SideBarLink = () => {
    
  const navigate = useNavigate();
  const loc = useLocation();
  const handleNavigateToHome = () => {
    navigate("/");
    window.location.reload();
  };
  const { logoutUser } = UseAuth();
  const handleLogOut = () => {
    logoutUser().then(() => {
      Swal.fire({
        title: "LogOut",
        text: "Log out successfully",
        icon: "success",
      });
    });
  };
    return (
        <div
        id="application-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-72 bg-pink-100 border-e border-pink-600 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
      >
        <div className="px-6">
          <h1
            onClick={handleNavigateToHome}
            className="flex items-center gap-1 text-2xl font-semibold text-pink-900 cursor-pointer"
            aria-label="Brand"
          >
            <img src="/logo.png" alt="" className="h-12" />
            <h1>MingleHeart</h1>
          </h1>
        </div>

        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li>
              <Link
                to={"/dashboard"}
                className={
                  loc.pathname === "/dashboard"
                    ? "font-medium bg-pink-600 text-lg block border rounded px-2 py-1 text-white border-pink-600"
                    : "font-medium  text-lg block border rounded px-2 py-1 text-pink-600 border-pink-600"
                }
              >
                Dashboard
              </Link>
            </li>
            <li>
              <NavLink
                to={"/dashboard/edit-bioData"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-medium bg-pink-600 text-lg block border rounded px-2 py-1 text-white border-pink-600"
                    : "font-medium  text-lg block border rounded px-2 py-1 text-pink-600 border-pink-600"
                }
              >
                Edit bioData
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/dashboard/view-bioData"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-medium bg-pink-600 text-lg block border rounded px-2 py-1 text-white border-pink-600"
                    : "font-medium  text-lg block border rounded px-2 py-1 text-pink-600 border-pink-600"
                }
              >
                View bioData
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/dashboard/my-contact-request"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-medium bg-pink-600 text-lg block border rounded px-2 py-1 text-white border-pink-600"
                    : "font-medium  text-lg block border rounded px-2 py-1 text-pink-600 border-pink-600"
                }
              >
                My contact request
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/dashboard/favorites-bioData"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-medium bg-pink-600 text-lg block border rounded px-2 py-1 text-white border-pink-600"
                    : "font-medium  text-lg block border rounded px-2 py-1 text-pink-600 border-pink-600"
                }
              >
                favorites Diodata
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/dashboard/got-married"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-medium bg-pink-600 text-lg block border rounded px-2 py-1 text-white border-pink-600"
                    : "font-medium  text-lg block border rounded px-2 py-1 text-pink-600 border-pink-600"
                }
              >
                Got-married
              </NavLink>
            </li>

            <li>
              <h1
                onClick={handleLogOut}
                className="text-lg font-medium block border rounded px-2 py-1 text-pink-600 border-pink-600 cursor-pointer"
              >
                Logout
              </h1>
            </li>
            <li>
              <h1
                onClick={handleNavigateToHome}
                className="text-lg font-medium block border rounded px-2 py-1 text-pink-600 border-pink-600 cursor-pointer"
              >
                Home
              </h1>
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default SideBarLink;