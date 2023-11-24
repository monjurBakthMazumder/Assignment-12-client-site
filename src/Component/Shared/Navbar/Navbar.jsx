import Header from "./Header";
import Logo from "./Logo";
import ToggleButton from "./ToggleButton";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <>
      <Header/>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-pink-100 border-b border-pink-600 text-sm py-3 sm:py-0">
        <nav
          className="relative max-w-[100rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Logo/>
            <ToggleButton/>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
          <NavbarLink/>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
