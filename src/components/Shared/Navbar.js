import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };

  const menuItems = (
    <>
      <li>
        <Link className="hover:text-levender" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="hover:text-levender" to="/">
          Rent
        </Link>
      </li>
      <li>
        <Link className="hover:text-levender" to="/add">
          Add Property
        </Link>
      </li>
      {user ? (
        <li>
          <Link onClick={logOut} className="hover:text-levender" to="/login">
            Logout
          </Link>
        </li>
      ) : (
        <li>
          <Link className="hover:text-levender" to="/login">
            Login
          </Link>
        </li>
      )}
      <li>
        <Link className="hover:text-levender" to="/signup">
          Sign up
        </Link>
      </li>
    </>
  );

  return (
    <div className="text-grey bg-black">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <div className="w-full navbar sticky top-0 z-40  bg-mirage text-steel  border border-x-0 border-[#1D2534] px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">
            <div className="flex-1 px-2 mx-2 text-2xl uppercase text-grey">
              <Link className="hover:text-levender" to="/">
                Asha Property
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">{menuItems}</ul>
            </div>

            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-mirage text-steel">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
