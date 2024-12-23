import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMoon,
  faSun,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-6 bg-dark-background_color text-light-text_color">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="bg-light-pinkColor rounded-full size-16 flex justify-center items-center">
          <img
            src="../src/assets/images2.png"
            className="w-12 object-cover"
            alt="Logo"
          />
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-medium font-semibold">
        {[
          "Home",
          "About",
          "Portfolio",
          "Service",
          "Testimonials",
          "Blog",
          "Contact",
        ].map((item) => (
          <li key={item}>
            <a href="#" className="hover:text-light-pinkColor">
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-light-text_color text-2xl"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      {isMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-dark-background_color shadow-md md:hidden">
          <ul className="flex flex-col items-center justify-center space-y-4 py-4 text-medium font-semibold">
            {[
              "Home",
              "About",
              "Portfolio",
              "Service",
              "Testimonials",
              "Blog",
              "Contact",
            ].map((item) => (
              <li
                key={item}
                className=" border border-b-[1px] border-b-red-500"
              >
                <a href="#" className="hover:text-light-pinkColor">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="hidden md:flex space-x-4 text-medium text-light-text_color3 p-2 rounded-md">
        <a href="#" className="hover:text-light-pinkColor">
          <FontAwesomeIcon
            icon={faSun}
            size="xs"
            style={{
              color: "black",
            }}
          />
        </a>
        <a href="#" className="hover:text-light-pinkColor">
          <FontAwesomeIcon
            icon={faMoon}
            size="xs"
            style={{
              color: "black",
            }}
          />
        </a>
        <a href="#" className="hover:text-light-pinkColor">
          <FontAwesomeIcon
            size="xs"
            style={{
              color: "black",
            }}
            icon={faLinkedin}
          />
        </a>
      </div>

      {/* Icon Section */}
    </nav>
  );
};

export default Navbar;
