import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Touch = () => {
  return (
    <section className="w-full bg-light-primary  ">
      <div className="w-4/5   mx-auto bg-light-secondary pb-10">
        <div className="pt-10 flex items-center gap-2 justify-center uppercase">
          <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-solid border-l-transparent border-r-transparent border-b-light-pinkColor -rotate-90"></div>
          <h5 className="text-xl uppercase font-bold text-light-text_color">
            Get In Touch
          </h5>
          <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-solid border-l-transparent border-r-transparent border-b-light-pinkColor rotate-90"></div>
        </div>
        <p className="mt-3 sm:text-base md:text-lg md:w-1/2 mx-auto text-light-text_color2  sm:w-2/5 text-center  ">
          I'm a young tech enthusiast and entrepreneur who loves to take risks.
          I grew up in a tech family in New York City.
        </p>
        <div className="grid  md:grid-cols-3 sm:grid-cols-1 w-11/12  justify-between items-center mx-auto mt-[50px] gap-2 sm:gap-5 mb-16">
          <div className="flex  gap-5 justify-center items-center ">
            <div className="size-16 rounded-full bg-light-pinkColor  text-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "white" }}
                size="2x"
                className="leading-15 mt-4"
              />
            </div>
            <div className="flex flex-col text-light-text_color">
              <h6>Address</h6>
              <p>Bardeshi, Amin Bazar, New York</p>
            </div>
          </div>
          <div className="flex  gap-5 justify-center items-center ">
            <div className="size-16 rounded-full bg-light-pinkColor  text-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "white" }}
                size="2x"
                className="leading-15 mt-4"
              />
            </div>
            <div className="flex flex-col text-light-text_color">
              <h6>Address</h6>
              <p>Bardeshi, Amin Bazar, New York</p>
            </div>
          </div>
          <div className="flex  gap-5 justify-center items-center ">
            <div className="size-16 rounded-full bg-light-pinkColor  text-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "white" }}
                size="2x"
                className="leading-15 mt-4"
              />
            </div>
            <div className="flex flex-col text-light-text_color">
              <h6>Address</h6>
              <p>Bardeshi, Amin Bazar, New York</p>
            </div>
          </div>
        </div>
        <div className="w-11/12 flex flex-col md:flex-row mx-auto justify-center items-center text-light-text_color gap-7">
          <div className="w-full md:w-1/2 flex flex-col mb-7 mt-5">
            <div className="relative pb-[90%] md:pb-[50%] lg:pb-[50%] h-0 overflow-hidden rounded-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.308583624102!2d77.19605647549817!3d28.56049502570417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2772036ea33%3A0x2ab87e0433ef493d!2sBlock%20B%207%2C%20Arjun%20Nagar%2C%20Safdarjung%20Enclave%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1730126224898!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <h3 className="text-4xl font-bold mt-3 mb-9">Write me a message</h3>
            <form action="" className="flex flex-col">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3  md:gap-2 px-3">
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="inputName"
                    id="inputName"
                    placeholder="Your Name"
                    className="w-full bg-transparent border border-light-text_color2 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-light-pinkColor"
                  />
                </div>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="inputEmail"
                    id="inputEmail"
                    placeholder="Your Email"
                    className="w-full bg-transparent border border-light-text_color2 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-light-pinkColor"
                  />
                </div>
              </div>
              <div className="message-wrapper px-3">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="w-full h-52 mt-5 bg-transparent border border-light-text_color3 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-light-pinkColor"
                ></textarea>
              </div>
              <div className="px-3">
                <button
                  type="submit"
                  className="px-4 py-2 mt-2 bg-light-pinkColor rounded-md hover:bg-[#FF69B4]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Touch;
