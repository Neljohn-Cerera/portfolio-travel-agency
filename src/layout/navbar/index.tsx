import React from "react";
import classnames from "classnames";
import { Logo } from "./logo";

const Navbar = () => {
  return (
    <div className="md:h-24 h-full shadow-lg flex md:flex-row flex-col">
      <div className="flex-1 md:pl-16 p-5 flex justify-start items-center">
        <Logo />
      </div>
      <nav className="md:flex-1 md:flex md:flex-row md:justify-center md:items-center">
        <ul
          className="flex md:flex-row md:space-x-5 md:bg-gray-50 md:divide-none
        flex-col bg-blue-500 divide-y divide-blue-700"
        >
          <li
            className={classnames(
              "md:text-lg md:text-black md:font-normal md:p-4 md:tracking-wide cursor-pointer",
              "md:hover:text-blue-900 md:p-0 md:normal-case",
              "px-5 py-5 text-white font-medium tracking-widest uppercase"
            )}
          >
            Dashboard
          </li>
          <li
            className={classnames(
              "md:text-lg text-white md:font-semibold md:bg-blue-500 md:self-center md:py-2 md:px-6 md:rounded cursor-pointer ",
              "md:hover:bg-blue-700 md:p-0 md:normal-case",
              "px-5 py-5 text-white font-medium tracking-widest uppercase"
            )}
          >
            Promotions
          </li>
          <li
            className={classnames(
              "md:text-lg md:text-black md:font-normal md:p-4 md:tracking-wide cursor-pointer",
              "md:hover:text-blue-900 md:p-0 md:normal-case",
              "px-5 py-5 text-white font-medium tracking-widest uppercase"
            )}
          >
            Destinations
          </li>
          <li
            className={classnames(
              "md:text-lg md:text-black md:font-normal md:p-4 md:tracking-wide cursor-pointer",
              "md:hover:text-blue-900 md:p-0 md:normal-case",
              "px-5 py-5 text-white font-medium tracking-widest uppercase"
            )}
          >
            Contact
          </li>
          <li
            className={classnames(
              "md:text-lg md:text-black md:font-normal md:p-4 md:tracking-wide cursor-pointer",
              "md:hover:text-blue-900 md:p-0 md:normal-case",
              "px-5 py-5 text-white font-medium tracking-widest uppercase"
            )}
          >
            Account
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
