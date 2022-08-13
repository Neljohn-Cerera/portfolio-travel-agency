import React from "react";
import Details from "./details";
import Image from "./image";

const LandingPage = () => {
  return (
    <div className="md:flex bg-white md:h-[550px] h-[400px]">
      <Details />
      <Image />
    </div>
  );
};

export default LandingPage;
