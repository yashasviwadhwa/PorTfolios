import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSpaceAwesome } from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import Card from "../utils/Card";

const MyWorld = () => {
  return (
    <section className="w-full text-center mx-auto bg-light-primary pt-3">
      <div className="w-4/5 text-center bg-light-text_color mx-auto pb-14">
        <div className="pt-10 flex items-center gap-2 justify-center uppercase">
          <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-solid border-l-transparent border-r-transparent border-b-light-pinkColor -rotate-90"></div>
          <h5 className="text-xl uppercase font-bold">Welcome to My World</h5>
          <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-solid border-l-transparent border-r-transparent border-b-light-pinkColor rotate-90"></div>
        </div>

        {/* Section Description */}
        <p className="mt-3 sm:text-base md:text-lg md:w-1/2 mx-auto text-light-text_color2 sm:w-3/5 leading-relaxed">
          I'm a young tech enthusiast and entrepreneur who loves to take risks.
          I grew up in a tech family in New York City.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 w-11/12 mx-auto mt-16">
          <Card
            icon={faReact}
            title="Web Development"
            description="Specializing in creating responsive, user-friendly websites with modern front-end frameworks like React, HTML5, and CSS3. Focused on providing a seamless user experience."
          />
          <Card
            icon={faGem}
            title="App Development"
            description="Experienced in building cross-platform mobile apps with Flutter, utilizing Firebase for real-time data, and implementing smooth state management for performance."
          />
          <Card
            icon={faSpaceAwesome}
            title="Programming"
            description="Proficient in Java, Python, and C++, with a strong understanding of algorithms, data structures, and object-oriented programming to solve complex challenges efficiently."
          />
        </div>
      </div>
    </section>
  );
};

export default MyWorld;
