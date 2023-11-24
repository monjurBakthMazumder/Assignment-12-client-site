import { NavLink } from "react-router-dom";

const SideBarUserLink = () => {
  return (
    <>
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
          Edit biodata
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
          View biodata
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
          Favorites biodata
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
          Got married
        </NavLink>
      </li>
    </>
  );
};

export default SideBarUserLink;
