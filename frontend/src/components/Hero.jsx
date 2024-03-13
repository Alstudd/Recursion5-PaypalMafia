import React from "react";
import "../styles/globals.css"

const Hero = () => {
  return (
    <div className="w-full -mt-24">
      <div className="flex flex-col items-center justify-center h-[620px] bgimg px-4 mb-16 max-sm:mt-4">
        <div className="mx-auto px-4 py-1 bg-white bg-opacity-20 rounded-full text-md text-white mb-2 backdrop-blur-sm cursor-pointer max-sm:text-sm">
          <a href="/login">Login as Guest 👽👻</a>
        </div>
        <div className="text-center">
          <h1 className="text-5xl text-white text-center max-sm:text-3xl font-bold hero-text z-0 px-4">
            Dont worry about <span className="textgrad">Overpricing</span>{" "}
            <br />
            If we are here!
          </h1>
          <p className="mt-4">
            <span className="text-white max-sm:text-sm font-semibold text-center z-10 text-sm px-4 hero-text">
              Compare prices of hotels, restaurants, and attractions and get the
              best deal.
            </span>
          </p>
        </div>
        <a href="/login">
          <div className="p-2 w-fit bg-black backdrop-blur-md flex rounded-full z-10 relative top-7 bg-opacity-30">
            <div className="bg-white h-14 rounded-full py-2 px-4 w-fit flex items-center justify-center cursor-pointer">
              <img src="/restros.svg" alt="" className="mr-2 max-sm:hidden" />
              <div className="text-sm text-blue-400 max-sm:text-sm">
                Restros
              </div>
            </div>
            <div className="bg-transparent h-14 rounded-full py-2 px-4 w-fit flex items-center justify-center hover:border cursor-pointer">
              <img src="/transport.svg" alt="" className="mr-2 max-sm:hidden" />
              <div className="text-sm text-white max-sm:text-sm">Transport</div>
            </div>
            <div className="bg-transparent h-14 rounded-full py-2 px-4 w-fit flex items-center justify-center hover:hover:border cursor-pointer">
              <img src="/stays.svg" alt="" className="mr-2 max-sm:hidden" />
              <div className="text-sm text-white max-sm:text-sm">Stays</div>
            </div>
            <div className="bg-transparent h-14 rounded-full py-2 px-4 w-fit flex items-center justify-center hover:hover:border cursor-pointer">
              <img src="/attracts.svg" alt="" className="mr-2 max-sm:hidden" />
              <div className="text-sm text-white max-sm:text-sm">
                Attractions
              </div>
            </div>
          </div>
        </a>
        <div className="w-9/12 h-fit bg-white rounded-2xl shadow-2xl pl-4 pb-4">
          <div className="flex justify-around mt-10 max-md:flex-col ">
            <div>
              <div className="font-semibold max-sm:text-sm">Select a city</div>
              <div className="text-sm text-gray-400 max-sm:text-xs">
                Where are you now?
              </div>
            </div>
            <div>
              <div className="font-semibold max-sm:text-sm">Compare Prices</div>
              <div className="text-sm text-gray-400 max-sm:text-xs">
                Know where its the cheapest
              </div>
            </div>

            <div>
              <div className="font-semibold max-sm:text-sm">
                Know from others.
              </div>
              <div className="text-sm text-gray-400 max-sm:text-xs">
                Don’t get fooled by fake prices, ask community
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;