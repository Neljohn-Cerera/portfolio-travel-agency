import React from "react";
import Image from "next/image";
import Ratings from "../ratings";
import classnames from "classnames";

type Props = {
  img: any;
  place: string;
  content: string;
  altImg: string;
  lastImg?: boolean;
  left?: boolean;
};

const Destination = ({
  img,
  place,
  content,
  altImg,
  lastImg = false,
  left = false,
}: Props) => {
  return (
    <div className="flex">
      {/*If Image is not left */}
      {left && (
        <div
          className={classnames("flex-1 relative w-full h-96", {
            "mb-32": lastImg === false,
            "mb-0": lastImg === true,
          })}
        >
          <Image
            src={img}
            alt={altImg}
            layout="fill"
            priority={true}
            className="rounded"
          />
        </div>
      )}
      {/* Content */}
      <div
        className={classnames("flex-1 flex flex-col", {
          "pl-16": left === true,
          "pr-16": left === false,
        })}
      >
        <h3 className="uppercase font-bold text-2xl text-blue-700 mb-2">
          {place}
        </h3>
        <hr className="w-1/2" />
        <h4 className="font-normal text-lg text-blue-700">Ratings</h4>
        <Ratings />
        <p className="text-justify leading-loose text-lg">{content}</p>
        <button
          type="button"
          className="inline-block py-4 w-56 bg-blue-600 text-white font-semibold text-lg 
        leading-tight uppercase rounded shadow-md mt-5
        hover:bg-blue-700 hover:shadow-lg 
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
        active:bg-blue-800 active:shadow-lg 
        transition duration-150 ease-in-out"
        >
          Book NOW
        </button>
        <hr />
      </div>
      {/*If Image is left */}
      {!left && (
        <div
          className={classnames("flex-1 relative w-full h-96", {
            "mb-32": lastImg === false,
            "mb-0": lastImg === true,
          })}
        >
          <Image
            src={img}
            alt={altImg}
            layout="fill"
            priority={true}
            className="rounded"
          />
        </div>
      )}
    </div>
  );
};

export default Destination;
