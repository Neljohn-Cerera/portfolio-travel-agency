import React from "react";
import eden from "../../../assets/images/eden.jpg";
import malagos from "../../../assets/images/malagos.jpg";
import samal from "../../../assets/images/samal.jpg";
import Destination from "./destination";

const Destinations = () => {
  return (
    <div className="w-full flex flex-col bg-gray-50 px-16 py-16">
      <h2 className="text-blue-900 font-extrabold text-3xl tracking-widest uppercase mx-auto mb-6">
        Destinations
      </h2>
      <hr className="mb-16 w-1/4 mx-auto" />
      <div className="flex flex-col">
        <Destination
          img={eden}
          altImg="Picture of Eden"
          place="Eden"
          content="
            Explore a pine forest, breathe the cool mountain air, and enjoy the
            breathtaking viewpoints. Eden Nature Park is a relaxing highland
            area that you can easily visit from the city center. This park
            resort offers homey accommodations, various restaurants that use
            ingredients food freshly harvested from gardens in the area, fun
            outdoor activities, hiking trails, and a cultural village.
        "
        />
        <Destination
          left
          img={malagos}
          altImg="Picture of Malagos"
          place="Malagos Tour"
          content="
            The Malagos Garden Resort is one of the frequently visited
            destinations in the city of Davao. This sprawling 12-hectare garden
            resort has parks, hotel, spa, restaurants, and they offer an
            educational entertainment as well that’s perfect for your kids. The
            resort is located in Barangay Malagos, Baguio District, Calinan,
            Davao City. If you don’t have a private vehicle, no worries because
            it’s very easy to commute.
        "
        />
        <Destination
          img={samal}
          altImg="Picture of Samal"
          lastImg
          place="Samal"
          content="
            Samal is the only city in the country that encompasses two entire
            islands, hence its name as the Island Garden City. While pristine
            beaches dot the island's shores, hills dominate the middle portions
            of the island. Talikud Island is located southwest of the main
            island.
        "
        />
      </div>
      <button
        type="button"
        className="inline-block py-2 w-40 bg-violet-600 text-white font-semibold text-lg 
        leading-tight uppercase rounded shadow-md mt-16 mx-auto
        hover:bg-violet-700 hover:shadow-lg 
        focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 
        active:bg-violet-800 active:shadow-lg 
        transition duration-150 ease-in-out"
      >
        More
      </button>
    </div>
  );
};

export default Destinations;
