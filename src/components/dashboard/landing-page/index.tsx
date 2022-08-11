import React from "react";
import Details from "./details";
import Image from "./image";

const LandingPage = () => {
  return (
    <div className="flex bg-white h-[550px]">
      <Details />
      <Image />
    </div>
  );
};

export default LandingPage;
