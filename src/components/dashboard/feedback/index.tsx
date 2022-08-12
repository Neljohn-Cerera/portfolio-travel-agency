import React from "react";
import FeedbackImage from "./image";

const Feedback = () => {
  return (
    <div className="grid grid-cols-2 p-16 bg-white">
      <form className="bg-gray-50 shadow-lg rounded">
        <h4>Email us</h4>
        <input type="text" />
      </form>
      <FeedbackImage />
    </div>
  );
};

export default Feedback;
