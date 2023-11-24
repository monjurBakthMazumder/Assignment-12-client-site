import UseAuth from '../../../Hock/UseAuth';
import Swal from 'sweetalert2';
import { Link, NavLink } from 'react-router-dom';

const NavbarLink = () => {
    const { user, logoutUser } = UseAuth();
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
        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-3 lg:gap-x-7 sm:mt-0 sm:pl-7">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium text-base text-pink-600 underline sm:py-6"
              : "font-medium text-base text-pink-600 sm:py-6"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/biodatas"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium text-base text-pink-600 underline sm:py-6"
              : "font-medium text-base text-pink-600 sm:py-6"
          }
        >
          Biodatas
        </NavLink>
        <NavLink
          to={"/about-us"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium text-base text-pink-600 underline sm:py-6"
              : "font-medium text-base text-pink-600 sm:py-6"
          }
        >
          About us
        </NavLink>
        <NavLink
          to={"/contact-us"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium text-base text-pink-600 underline sm:py-6"
              : "font-medium text-base text-pink-600 sm:py-6"
          }
        >
          Contact us
        </NavLink>
        {user && (
          <>
            <NavLink
              to={"/dashboard"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-medium text-base text-pink-600 underline sm:py-6"
                  : "font-medium text-base text-pink-600 sm:py-6"
              }
            >
              Dashboard
            </NavLink>
          </>
        )}
        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="text-base flex items-center gap-x-2 font-medium text-pink-600 sm:border-l sm:border-pink-900 sm:my-6 sm:pl-6"
            >
              Log out
            </button>
          </>
        ) : (
          <Link
            to={"/login"}
            className="text-base flex items-center gap-x-2 font-medium text-pink-600 sm:border-l sm:border-pink-900 sm:my-6 sm:pl-6"
          >
            Log in
          </Link>
        )}
      </div>
    );
};

export default NavbarLink;