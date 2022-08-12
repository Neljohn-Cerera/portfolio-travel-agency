import React from "react";
import Destinations from "./destinations";
import Feedback from "./feedback";
import LandingPage from "./landing-page";

const Dashboard = () => {
  return (
    <>
      <LandingPage />
      <hr />
      <Destinations />
      <hr />
      <Feedback />
    </>
  );
};

export default Dashboard;
