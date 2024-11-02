import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border border-primGreen text-primGreen hover:bg-primGreen hover:text-white"
              : "hover:bg-primGreen hover:text-white"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/listedbooks"
          className={({ isActive }) =>
            isActive
              ? "border border-primGreen text-primGreen hover:bg-primGreen hover:text-white"
              : "hover:bg-primGreen hover:text-white"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/pagestoread"
          className={({ isActive }) =>
            isActive
              ? "border border-primGreen text-primGreen hover:bg-primGreen hover:text-white"
              : "hover:bg-primGreen hover:text-white"
          }
        >
          Pages To Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="text-xl md:text-2xl font-bold">Book Vibes</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">{navItems}</ul>
      </div>
      <div className="navbar-end gap-3">
        <a className="btn bg-primGreen text-white hover:bg-transparent hover:border-primGreen hover:text-primGreen">Sign In</a>
        <a className="btn bg-[#50B1C9] text-white hover:bg-transparent hover:border-[#50B1C9] hover:text-[#50B1C9]">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
