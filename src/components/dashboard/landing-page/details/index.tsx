import React from "react";

const Details = () => {
  return (
    <div
      className="md:w-[600px] h-full flex flex-col md:justify-center md:items-start md:pl-16 md:m-0
    items-center justify-center p-10 mx-auto"
    >
      <h1
        className="text-3xl font-extrabold text-blue-900 tracking-widest uppercase
      md:text-5xl md:font-bold"
      >
        Travel davao
      </h1>
      <h3
        className="md:text-xl md:tracking-wider md:my-5 
      text-base font-semibold text-blue-500 my-2"
      >
        WHERE YOU CAN NEVER FORGET
      </h3>
      <ul className="flex flex-col list-disc">
        <li
          className="md:ml-5 md:text-lg md:tracking-wider
        font-normal text-gray-500 text-base mb-1"
        >
          Davao best places
        </li>
        <li
          className="md:ml-5 md:text-lg md:tracking-wider
        font-normal text-gray-500 text-base mb-1"
        >
          Davao best places
        </li>
        <li
          className="md:ml-5 md:text-lg md:tracking-wider
        font-normal text-gray-500 text-base mb-1"
        >
          Meet New Friends
        </li>
      </ul>
      <button
        type="button"
        className="inline-block py-3 w-60 bg-violet-600 text-white font-normal text-lg 
        leading-tight uppercase rounded shadow-md mt-6 
        hover:bg-violet-700 hover:shadow-lg 
        focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 
        active:bg-violet-800 active:shadow-lg 
        transition duration-150 ease-in-out
        md:py-5 md:w-64 md:text-xl "
      >
        Book NOW {">>"}
      </button>
    </div>
  );
};

export default Details;
