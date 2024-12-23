import React from "react";

const Portfolio = () => {
  return (
    <section className="w-full bg-light-primary">
      <div className="w-4/5 bg-light-secondary mx-auto  text-light-text_color3 text-center ">
        <div className="pt-10 flex items-center gap-2 justify-center uppercase">
          <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-solid border-l-transparent border-r-transparent border-b-light-pinkColor -rotate-90"></div>
          <h5 className="text-xl uppercase font-bold">Welcome to my World</h5>
          <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-solid border-l-transparent border-r-transparent border-b-light-pinkColor rotate-90"></div>
        </div>
        <p className="mt-3 sm:text-base md:text-lg md:w-1/2 mx-auto text-light-text_color2  sm:w-2/5  ">
          Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non
          proident, sunt in culim id est.
        </p>
        <div className="w-full max-w-[1080px] mx-auto mt-5 space-x-3 ">
          <button className="border border-light-text_color2 bg-light-pinkColor text-light-text_color px-4 py-2 rounded-lg  transition duration-300">
            All
          </button>
          <button className="border border-light-text_color2  text-light-text_color2 px-4 py-2 rounded-lg border-1 hover:border-light-pinkColor transition duration-300">
            Programming
          </button>
          <button className="border border-light-text_color2  text-light-text_color2 px-4 py-2 rounded-lg border-1 hover:border-light-pinkColor transition duration-300">
            Development
          </button>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 w-full gap-3 mt-8">
            {/* Product 1 */}
            <div className="aspect-square relative" data-item="Mobile">
              <a href="#">
                <img
                  src="../src/assets/image.png"
                  alt="Mobile phone product"
                  loading="lazy"
                  className="w-full h-full  object-cover"
                />
              </a>
              <div className="overlay absolute inset-0"></div>
            </div>

            {/* Product 2 */}
            <div
              className="aspect-square relative transition-transform duration-300 ease-in-out opacity-100 visible p-3"
              data-item="Camera"
            >
              <img
                src="../src/assets/Tea_landing.png"
                alt="Camera product"
                loading="lazy"
                className="w-full h-full  object-cover"
              />
              <div className="overlay absolute inset-0"></div>
            </div>

            {/* Product 3 */}
            <div className="aspect-square relative" data-item="Watch">
              <img
                src="../src/assets/Trying.png"
                alt="Watch product"
                loading="lazy"
                className="h-full md:w-full object-cover sm:w-1/2"
              />
              <div className="overlay absolute inset-0"></div>
            </div>

            {/* Product 4 */}
            <div className="aspect-square relative" data-item="Shoe">
              <img
                src="../src/assets/TeckShark.png"
                alt="Shoe product"
                loading="lazy"
                className="h-full md:w-full object-cover sm:w-1/2"
              />
              <div className="overlay absolute inset-0"></div>
            </div>

            {/* Product 5 */}
            <div className="aspect-square relative" data-item="Headphones">
              <img
                src="../src/assets/image.png"
                alt="Headphones product"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="overlay absolute inset-0"></div>
            </div>

            {/* Product 6 */}
            <div className="aspect-square relative" data-item="Shoe">
              <img
                src="https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww"
                alt="Shoe product"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="overlay absolute inset-0"></div>
            </div>

            {/* Product 7 */}
            <div className="aspect-square relative" data-item="phones">
              <img
                src="https://images.unsplash.com/photo-1520189123429-6a76abfe7906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Phone product"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="overlay absolute inset-0"></div>
            </div>

            {/* Product 8 */}
            <div className="aspect-square relative" data-item="phones">
              <img
                src="https://images.unsplash.com/photo-1620288650016-906e58d090ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Phone product"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="overlay absolute inset-0"></div>
            </div>

            {/* Product 9 */}
            <div className="aspect-square relative" data-item="Shoe">
              <img
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fHww"
                alt="Shoe product"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="overlay absolute inset-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
