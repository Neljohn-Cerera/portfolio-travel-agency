import React from "react";
import classnames from "classnames";
import { Logo } from "./logo";

const Navbar = () => {
  const [open, setOPen] = React.useState(false);
  const handleClose = () => {
    setOPen((prev) => !prev);
  };
  return (
    <div
      className="relative h-full shadow-lg flex flex-col
    md:h-24 md:flex-row"
    >
      <div
        className="relative w-full p-5 flex justify-start items-center bg-gray-50
      md:w-[900px] md:pl-16 "
      >
        <Logo />
        <button
          className="md:hidden absolute right-5 text-gray-500 border-0 hover:shadow-none hover:no-underline 
        py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
        rounded-full cursor-pointer"
          onClick={handleClose}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
      </div>
      <nav
        className={classnames(
          "w-full absolute top-24 bg-blue-500 transition ease-in-out duration-150 delay-300 z-10",
          "md:bg-gray-50  md:flex md:flex-row md:justify-center md:items-center",
          "md:relative md:left-0 md:top-0 md:transform-none",
          {
            "-translate-x-full": open === false,
            "translate-x-0": open == true,
          }
        )}
      >
        <ul
          className="flex md:flex-row md:space-x-5 md:bg-gray-50 md:divide-none
        flex-col divide-y divide-blue-700"
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
