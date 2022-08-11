import React from "react";

const Details = () => {
  return (
    <div className="md:w-[600px] md:flex md:flex-col justify-center items-start pl-16">
      <h1 className="md:text-5xl md:font-bold md:text-blue-900 md:tracking-widest uppercase">
        Travel With US
      </h1>
      <h3 className="md:text-xl md:font-semibold md:text-blue-500 md:tracking-wider md:my-5">
        WHERE YOU CAN NEVER FORGET
      </h3>
      <ul className="flex flex-col list-disc">
        <li className="ml-5 md:text-lg md:font-normal md:text-gray-500 md:tracking-wider md:mb-1">
          Davao best places
        </li>
        <li className="ml-5 md:text-lg md:font-normal md:text-gray-500 md:tracking-wider md:mb-1">
          Davao best places
        </li>
        <li className="ml-5 md:text-lg md:font-normal md:text-gray-500 md:tracking-wider md:mb-1">
          Meet new friends
        </li>
      </ul>
      <button
        type="button"
        className="inline-block py-5 w-64 bg-violet-600 text-white font-normal text-xl 
        leading-tight uppercase rounded shadow-md mt-6 
        hover:bg-violet-700 hover:shadow-lg 
        focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 
        active:bg-violet-800 active:shadow-lg 
        transition duration-150 ease-in-out"
      >
        Book NOW
      </button>
    </div>
  );
};

export default Details;
