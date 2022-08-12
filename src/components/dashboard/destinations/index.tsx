import React from "react";
import Image from "next/image";
import eden from "../../../assets/images/eden.jpg";
import malagos from "../../../assets/images/malagos.jpg";
import samal from "../../../assets/images/samal.jpg";
import Ratings from "./ratings";

const Destinations = () => {
  return (
    <div className="w-full flex flex-col bg-gray-50 px-16 py-32">
      <h2 className="text-blue-900 font-extrabold text-3xl tracking-widest uppercase mx-auto mb-32">
        Destinations
      </h2>
      <div className="grid grid-cols-2">
        {/* IMAGE 1 */}
        {/* Image */}
        <div className="relative w-full h-96 mb-40">
          <Image
            src={eden}
            alt="Picture of Eden Destination"
            layout="fill"
            priority={true}
            className="rounded"
          />
        </div>
        {/* Content */}
        <div className="pl-16 flex flex-col">
          <h3 className="uppercase font-bold text-2xl text-blue-700 mb-2">
            EDEN
          </h3>
          <hr className="w-1/2" />
          <h4 className="font-normal text-lg text-blue-700">Ratings</h4>
          <Ratings />
          <p className="text-justify leading-loose text-lg">
            Explore a pine forest, breathe the cool mountain air, and enjoy the
            breathtaking viewpoints. Eden Nature Park is a relaxing highland
            area that you can easily visit from the city center. This park
            resort offers homey accommodations, various restaurants that use
            ingredients food freshly harvested from gardens in the area, fun
            outdoor activities, hiking trails, and a cultural village.
          </p>
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
        {/* IMAGE 2 */}
        <div className="pr-16 flex flex-col">
          <h3 className="uppercase font-bold text-2xl text-blue-700 mb-2">
            Malagos Tour
          </h3>
          <hr className="w-1/2" />
          <h4 className="font-normal text-lg text-blue-700">Ratings</h4>
          <Ratings />
          <p className="text-justify leading-loose text-lg">
            The Malagos Garden Resort is one of the frequently visited
            destinations in the city of Davao. This sprawling 12-hectare garden
            resort has parks, hotel, spa, restaurants, and they offer an
            educational entertainment as well that’s perfect for your kids. The
            resort is located in Barangay Malagos, Baguio District, Calinan,
            Davao City. If you don’t have a private vehicle, no worries because
            it’s very easy to commute.
          </p>
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
        <div className="relative w-full h-96 mb-40">
          <Image
            src={malagos}
            alt="Picture of Malgos Destination"
            layout="fill"
            priority={true}
            className="rounded"
          />
        </div>
        {/* IMAGE 3 */}
        <div className="relative w-full h-96">
          <Image
            src={samal}
            alt="Picture of Samal Destination"
            layout="fill"
            priority={true}
            className="rounded"
          />
        </div>
        <div className="pl-16 flex flex-col">
          <h3 className="uppercase font-bold text-2xl text-blue-700 mb-2">
            Samal
          </h3>
          <hr className="w-1/2" />
          <h4 className="font-normal text-lg text-blue-700">Ratings</h4>
          <Ratings />
          <p className="text-justify leading-loose text-lg">
            Samal is the only city in the country that encompasses two entire
            islands, hence its name as the Island Garden City. While pristine
            beaches dot the island's shores, hills dominate the middle portions
            of the island. Talikud Island is located southwest of the main
            island.
          </p>
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
      </div>
    </div>
  );
};

export default Destinations;
