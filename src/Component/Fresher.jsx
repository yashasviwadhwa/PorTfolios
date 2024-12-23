import React from "react";

const Fresher = () => {
  return (
    <section className="w-full bg-light-primary">
      <div className="w-4/5 bg-light-secondary mx-auto flex flex-col md:flex-row justify-center items-center gap-8 pb-5 px-4">
        <div className="flex-shrink-0 m-10 max-w-md w-full flex flex-col">
          <img
            src="https://ethemestudio.com/demo/fungi/11_home_boxed/image/about-image-1.png"
            className="w-full h-auto object-cover rounded-lg shadow-md"
            alt="Yashasvi Wadhwa"
          />
        </div>
        <div className="flex flex-col text-light-text_color3 max-w-xl">
          <h4 className="text-xl uppercase text-light-pinkColor mb-2 mt-10">
            About Me
          </h4>
          <h2 className="text-4xl md:text-5xl w-full leading-tight mb-4">
            Fresher Web Designer from New Delhi
          </h2>
          <div className="space-y-4 w-11/12 text-justify">
            <p>
              I'm Yashasvi Wadhwa, a passionate and motivated web Developer
              based in New Delhi. With a Bachelor's degree in Computer
              Applications, I bring a strong foundation in design principles,
              coding, and a keen eye for detail. As a fresher, I'm eager to
              apply my skills to real-world projects, and I'm driven to create
              engaging, user-friendly designs that elevate user experience.
            </p>
            <p>
              I'm constantly learning and exploring new technologies to enhance
              my skill set. Currently, I'm available for freelance opportunities
              and ready to collaborate on projects that challenge my creativity
              and push the boundaries of design.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-2 mb-2 sm:grid-cols-1">
              <div className="cols space-y-3">
                <div>
                  <h3 className="font-semibold">Name</h3>
                  <p>Yashasvi Wadhwa</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>yashasviwadhwa924@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+91 9354063013</p>
                </div>
              </div>
              <div className="cols space-y-3">
                <div>
                  <h3 className="font-semibold">Age</h3>
                  <p>23 years</p>
                </div>
                <div>
                  <h3 className="font-semibold">Education</h3>
                  <p>Bachelor of Computer Application</p>
                </div>
                <div>
                  <h3 className="font-semibold">Freelance</h3>
                  <p>Available</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="uppercase mt-4 bg-light-pinkColor px-4 py-2 rounded-md text-white hover:bg-opacity-90 transition-colors duration-300 inline">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fresher;
