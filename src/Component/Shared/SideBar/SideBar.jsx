
import { Outlet } from "react-router-dom";
import SideBarIcon from "./SideBarIcon";
import SideBarLink from "./SideBarLink";

const SideBar = () => {
  return (
    <body className="bg-pink-50 min-h-screen">
      <SideBarIcon/>
      <SideBarLink/>
      
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <Outlet />
      </div>
    </body>
  );
};

export default SideBar;
