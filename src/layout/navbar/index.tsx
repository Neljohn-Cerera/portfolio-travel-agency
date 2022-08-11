import React from "react";
import classnames from "classnames";

const Navbar = () => {
  return (
    <div className="h-24 shadow-lg flex">
      <div className="flex-1">
        <h3 className="hidden">Logo</h3>
      </div>
      <nav className="flex-1 flex md:flex-row md:justify-center md:items-center">
        <li className="flex space-x-5">
          <ul
            className={classnames(
              "md:text-lg md:font-normal md:p-4 md:tracking-wide cursor-pointer",
              "md:hover:text-blue-900 md:hover:text-xl"
            )}
          >
            Dashboard
          </ul>
          <ul
            className={classnames(
              "md:text-lg text-white md:font-semibold md:bg-blue-500 md:self-center md:py-2 md:px-6 cursor-pointer",
              "md:hover:bg-blue-300 md:hover:text-xl"
            )}
          >
            Promo
          </ul>
          <ul
            className={classnames(
              "md:text-lg md:font-normal md:p-4 md:tracking-wide cursor-pointer",
              "md:hover:text-blue-900 md:hover:text-xl"
            )}
          >
            Places
          </ul>
          <ul
            className={classnames(
              "md:text-lg md:font-normal md:p-4 md:tracking-wide cursor-pointer",
              "md:hover:text-blue-900 md:hover:text-xl"
            )}
          >
            Contact
          </ul>
          <ul
            className={classnames(
              "md:text-lg md:font-normal md:p-4 md:tracking-wide cursor-pointer",
              "md:hover:text-blue-900 md:hover:text-xl"
            )}
          >
            Account
          </ul>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
