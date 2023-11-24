import { NavLink } from "react-router-dom";

const SideBarAdminLink = () => {
  return (
    <>
      <li>
        <NavLink
          to={"/dashboard/admin"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium bg-pink-600 text-lg block border rounded px-2 py-1 text-white border-pink-600"
              : "font-medium  text-lg block border rounded px-2 py-1 text-pink-600 border-pink-600"
          }
        >
          Admin dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/dashboard/menage-users"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium bg-pink-600 text-lg block border rounded px-2 py-1 text-white border-pink-600"
              : "font-medium  text-lg block border rounded px-2 py-1 text-pink-600 border-pink-600"
          }
        >
          Menage users
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/dashboard/approved-premium"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium bg-pink-600 text-lg block border rounded px-2 py-1 text-white border-pink-600"
              : "font-medium  text-lg block border rounded px-2 py-1 text-pink-600 border-pink-600"
          }
        >
          Approved premium
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/dashboard/approved-contact-request"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium bg-pink-600 text-lg block border rounded px-2 py-1 text-white border-pink-600"
              : "font-medium  text-lg block border rounded px-2 py-1 text-pink-600 border-pink-600"
          }
        >
          Approved contact request
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/dashboard/success-story"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-medium bg-pink-600 text-lg block border rounded px-2 py-1 text-white border-pink-600"
              : "font-medium  text-lg block border rounded px-2 py-1 text-pink-600 border-pink-600"
          }
        >
          Success story
        </NavLink>
      </li>
    </>
  );
};

export default SideBarAdminLink;
