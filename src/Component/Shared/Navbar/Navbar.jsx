import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../../Hock/UseAuth";

const Navbar = () => {
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
    <>
      {user ? (
        <div className="bg-pink-950">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-5  max-w-[100rem] w-full mx-auto  py-3 sm:px-6 lg:px-8">
            <h1 className="text-white  text-sm">Discover Love&#39;s Journey on MingleHeart&#39;s Pathway.</h1>
            <div className="flex items-center gap-2">
              <div className="relative inline-block">
                <img
                  className="inline-block h-[1.8rem] w-[1.8rem] rounded-md"
                  src={user?.photoURL}
                  alt="Image Description"
                />
                <span className="absolute top-0 right-0 block h-3 w-3 rounded-full transform -translate-y-1/2 translate-x-1/2 bg-pink-400"></span>
              </div>
              <h1 className="text-white  text-sm">{user.displayName}</h1>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-pink-900 border-b border-white/[.5] text-sm py-3 sm:py-0">
        <nav
          className="relative max-w-[100rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              to={"/"}
              className="flex items-center gap-1 text-2xl font-semibold text-white"
              aria-label="Brand"
            >
              <img src="/logo.png" alt="" className="h-12" />
              <h1>MingleHeart</h1>
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.5] font-medium text-white/[.5] shadow-sm align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-3 lg:gap-x-7 sm:mt-0 sm:pl-7">
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-medium text-white underline sm:py-6"
                    : "font-medium text-white sm:py-6"
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
                    ? "font-medium text-white underline sm:py-6"
                    : "font-medium text-white sm:py-6"
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
                    ? "font-medium text-white underline sm:py-6"
                    : "font-medium text-white sm:py-6"
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
                    ? "font-medium text-white underline sm:py-6"
                    : "font-medium text-white sm:py-6"
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
                        ? "font-medium text-white underline sm:py-6"
                        : "font-medium text-white sm:py-6"
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
                    className="flex items-center gap-x-2 font-medium text-white sm:border-l sm:border-white/[.3] sm:my-6 sm:pl-6"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <Link
                  to={"/login"}
                  className="flex items-center gap-x-2 font-medium text-white sm:border-l sm:border-white/[.3] sm:my-6 sm:pl-6"
                >
                  Log in
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
