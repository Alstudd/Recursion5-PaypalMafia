import React from "react";
import "../styles/globals.css";

const Hero = () => {
  return (
    <div className="w-full -mt-24">
      <div className="flex flex-col items-center justify-center h-[620px] bgimg px-4 mb-16 max-sm:mt-4">
        <div className="mx-auto px-4 py-1 bg-white bg-opacity-20 rounded-full text-md text-white mb-2 backdrop-blur-sm cursor-pointer max-sm:text-sm">
          <a href="/login">Public Square is working on a revloution 🚀👨‍💻</a>
        </div>
        <div className="text-center">
          <h1 className="text-5xl text-white text-center max-sm:text-3xl font-bold hero-text z-0 px-4">
            Worried about your voice not being{" "}
            <span className="textgrad">Heard</span> <br />
            We got you covered
          </h1>
          <p className="mt-4">
            <span className="text-white max-sm:text-sm font-semibold text-center z-10 text-sm px-4 hero-text">
              We are here to get your voice heard to the government, tracking
              their every process and how they respond to your inconviences
            </span>
          </p>
        </div>
        <a href="/login">
          <div className="p-2 w-fit bg-black gap-3 backdrop-blur-md flex rounded-full z-10 relative top-7 bg-opacity-30">
            <div className="bg-white h-14 rounded-full py-2 pl-4 px-5 w-fit flex items-center justify-center cursor-pointer">
              <img src="/restros.svg" alt="" className="mr-2 max-sm:hidden" />
              <div className="text-sm text-blue-400 max-sm:text-sm">
                Home
              </div>
            </div>
            <div className="bg-transparent h-14 rounded-full py-2 pl-4 px-5 w-fit flex items-center justify-center hover:border cursor-pointer">
              <img src="/transport.svg" alt="" className="mr-2 max-sm:hidden" />
              <div className="text-sm text-white max-sm:text-sm">AI Chatbot</div>
            </div>
            <div className="bg-transparent h-14 rounded-full py-2 pl-4 px-5 w-fit flex items-center justify-center hover:hover:border cursor-pointer">
              <img src="/stays.svg" alt="" className="mr-2 max-sm:hidden" />
              <div className="text-sm text-white max-sm:text-sm">Sentimental</div>
            </div>
            <div className="bg-transparent h-14 rounded-full py-2 pl-4 px-5 w-fit flex items-center justify-center hover:hover:border cursor-pointer">
              <img src="/attracts.svg" alt="" className="mr-2 max-sm:hidden" />
              <div className="text-sm text-white max-sm:text-sm">
                Automation
              </div>
            </div>
          </div>
        </a>
        <div className="w-9/12 h-fit bg-white rounded-2xl shadow-2xl pl-4 pb-4">
          <div className="flex justify-around px-4 mt-10 max-md:flex-col ">
            <div>
              <div className="font-semibold max-sm:text-sm">Lodge a complaint</div>
              <div className="text-sm text-gray-400 max-sm:text-xs pr-4">
                We simplify the whole process of filing a complaint by helping you file it within a minute
              </div>
            </div>
            <div>
              <div className="font-semibold max-sm:text-sm">Secure platform</div>
              <div className="text-sm text-gray-400 max-sm:text-xs pr-4">
                We make sure you as a user is safe by providing top notch security through Blockchain
              </div>
            </div>

            <div>
              <div className="font-semibold max-sm:text-sm">
                You are not alone
              </div>
              <div className="text-sm text-gray-400 max-sm:text-xs">
                The whole community facing the same problem backs you up, so that you know you are not alone
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
