import React from "react";

const Skills = () => {
  return (
    <section className="w-full bg-light-primary   ">
      <div className="w-4/5 mx-auto bg-light-text_color p-6 rounded-lg shadow-lg pt-12 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-start w-full md:w-1/2 md:pr-8">
            <h4 className="text-xl text-light-pinkColor mb-2 mt-4">
              My Skills
            </h4>
            <h2 className="text-3xl md:text-5xl leading-tight mb-4 font-bold">
              I'm great in what I do and I'm loving it
            </h2>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariat non proident, sunt in culpa
              qui officia deserunt laborum.
            </p>
          </div>

          <div className="mt-8 md:mt-0 w-full md:w-1/2 space-y-6">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <h6 className="text-lg font-semibold">C++</h6>
                <p className="text-sm text-gray-500">84%</p>
              </div>
              <div className="bg-gray-300 h-2 rounded-full">
                <div className="bg-pink-500 h-full w-4/5 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <h6 className="text-lg font-semibold">Java</h6>
                <p className="text-sm text-gray-500">90%</p>
              </div>
              <div className="bg-gray-300 h-2 rounded-full">
                <div className="bg-pink-500 h-full w-[90%] rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <h6 className="text-lg font-semibold">
                  Flutter (App Development)
                </h6>
                <p className="text-sm text-gray-500">64%</p>
              </div>
              <div className="bg-gray-300 h-2 rounded-full">
                <div className="bg-pink-500 h-full w-3/5 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <h6 className="text-lg font-semibold">
                  Flutter (App Development)
                </h6>
                <p className="text-sm text-gray-500">64%</p>
              </div>
              <div className="bg-gray-300 h-2 rounded-full">
                <div className="bg-pink-500 h-full w-3/5 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <h6 className="text-lg font-semibold">
                  Flutter (App Development)
                </h6>
                <p className="text-sm text-gray-500">64%</p>
              </div>
              <div className="bg-gray-300 h-2 rounded-full">
                <div className="bg-pink-500 h-full w-3/5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
