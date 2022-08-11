import React from "react";

const Details = () => {
  return (
    <div className="md:flex-1 md:flex md:flex-col md:justify-center md:items-start pl-5">
      <h1 className="md:text-5xl md:font-bold md:text-blue-900 md:tracking-wider uppercase">
        Travel With US
      </h1>
      <h3 className="md:text-xl md:font-semibold md:text-blue-500 md:tracking-normal md:my-3">
        WHERE YOU CAN NEVER FORGET
      </h3>
      <ul className="flex flex-col list-disc">
        <li className="ml-5 md:text-lg md:font-normal md:text-blue-500 md:tracking-normal md:mb-1">
          Davao best places
        </li>
        <li className="ml-5 md:text-lg md:font-normal md:text-blue-500 md:tracking-normal md:mb-1">
          Davao best places
        </li>
        <li className="ml-5 md:text-lg md:font-normal md:text-blue-500 md:tracking-normal md:mb-1">
          Meet new friends
        </li>
      </ul>
      <button
        type="button"
        className="inline-block px-20 py-5 bg-blue-600 text-white font-normal text-xl 
        leading-tight uppercase rounded shadow-md mt-4 
        hover:bg-blue-700 hover:shadow-lg 
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
        active:bg-blue-800 active:shadow-lg 
        transition duration-150 ease-in-out"
      >
        Book NOW
      </button>
    </div>
  );
};

export default Details;
