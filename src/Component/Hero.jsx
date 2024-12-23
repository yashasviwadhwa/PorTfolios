import React, { useEffect } from "react";
import Navbar from "./Navbar";

import Typewriter from "typewriter-effect/dist/core";

const Hero = () => {
  useEffect(() => {
    const typewriters = new Typewriter("#typewriter", {
      strings: [" Web Developer", " Web Designer"],
      autoStart: true,
      loop: true,
      delay: 75,
      deleteSpeed: 77,
      pauseFor: 1500,
    });

    return () => {
      typewriters.stop();
    };
  }, []);

  return (
    <div className=" w-full bg-light-primary">
      <section className="w-4/5 bg-light-secondary mx-auto text-center text-light-text_color">
        <Navbar />
        <div className="size-80  flex justify-center  rounded-full bg-slate-600 mx-auto  items-center">
          <img
            src="../src/assets/image2.png"
            className="w-44  h-44 object-cover d-block mt-5 "
          />
        </div>
        <h3 className="text-xl mt-4 mb-3 ">Hello, I'm</h3>
        <h1 className="text-5xl font-bold mb-5 ">
          Yogesh <span className="text-light-pinkColor">Wadhwa</span>
        </h1>
        <p className="text-2xl text-light-text_color2 ">
          Indian Based
          <span id="typewriter" className="text-light-text_color "></span>
        </p>
        <div className="flex gap-4 justify-center items-center mt-5  pb-10">
          <button className="outline-none  gap-8 border border-3 border-light-pinkColor bg-light-pinkColor p-3 w-36 text-base font-bold text-transform: uppercase rounded ">
            HIRE Me
          </button>
          <button className=" uppercase outline-none rounded w-36   border-3 border-light-pinkColor text-light-text_color bg-light-secondary">
            ABOUT ME
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
