import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

const Footer = () => {
  return (
    <section className="w-full bg-light-primary">
      <div className="w-4/5 mx-auto text-center bg-light-text_color3 p-9">
        <h5 className=" pt-5 text-3xl  font-bold">Fungi</h5>
        <p className="text-xl w-1/2 mx-auto  mt-4 text-light-text_color2">
          Kilaboris nisi ut aliquip ex ea commodo consequat uis aute cupidatat
          non proident sunt in culd est laborum.
        </p>
        <div className="space-x-4 mt-3 pb-8 ">
          <a href="#" className="hover:text-light-pinkColor">
            <FontAwesomeIcon style={{ color: "white" }} icon={faFacebook} />
          </a>
          <a href="#" className="hover:text-light-pinkColor">
            <FontAwesomeIcon style={{ color: "white" }} icon={faTwitter} />
          </a>
          <a href="#" className="hover:text-light-pinkColor">
            <FontAwesomeIcon style={{ color: "white" }} icon={faLinkedin} />
          </a>
          <a href="#" className="hover:text-light-pinkColor">
            <FontAwesomeIcon style={{ color: "white" }} icon={faYoutube} />
          </a>
          <a href="#" className="hover:text-light-pinkColor">
            <FontAwesomeIcon style={{ color: "white" }} icon={faInstagram} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
