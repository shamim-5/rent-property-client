import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  const menuItems = (
    <>
      <li>
        <Link className="hover:text-levender" to="/">Home</Link>
      </li>
      <li>
        <Link className="hover:text-levender" to="/rent">Rent</Link>
      </li>
      <li>
        <Link className="hover:text-levender" to="/buy">Buy</Link>
      </li>
      <li>
        <Link className="hover:text-levender" to="/sell">Sell</Link>
      </li>
      <li>
        <Link className="hover:text-levender" to="/manage">Manage Properties</Link>
      </li>
      <li>
        <Link className="hover:text-levender" to="/resources">resources</Link>
      </li>
      <li>
        <Link className="hover:text-levender" to="/login">Login</Link>
      </li>
      <li>
        <Link className="hover:text-levender" to="/signup">Sign up</Link>
      </li>
    </>
  );

  return (
    <div className="text-grey bg-black">
      <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col ">
          <div class="w-full navbar bg-mirage text-steel  border border-x-0 border-[#1D2534] px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">
            <div class="flex-1 px-2 mx-2 text-2xl uppercase text-grey">
              <Link className="hover:text-levender" to="/">Rent A Property</Link>
            </div>
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal">{menuItems}</ul>
            </div>

            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          {children}
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-48 bg-mirage text-steel">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
