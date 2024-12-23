import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Correct path for FontAwesomeIcon
import { faReact, faSpaceAwesome } from "@fortawesome/free-brands-svg-icons"; // Correct path for React icon
import { faGem } from "@fortawesome/free-solid-svg-icons"; // Correct path for solid icons

const Card = ({ icon, title, description }) => {
  return (
    <div className=" p-4 bg-light-text_color text-left rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300  mx-auto mt-6 max-w-md  border border-1 border-light-text_color2 ">
      <div className="mt-4 mb-4">
        <FontAwesomeIcon
          icon={icon}
          size="3x"
          className="text-light-text_color3 "
        />
      </div>
      <h5 className="text-2xl font-semibold text-dark-text_color mb-3">
        {title}
      </h5>
      <p className="text-medium text-gray-600 leading-relaxed  w-11/12">
        {description}
      </p>
    </div>
  );
};

export default Card;
