import pic1 from "../assets/Home/building1.svg";
import pic2 from "../assets/Home/building2.svg";
import pic3 from "../assets/Home/building3.svg";
import pic4 from "../assets/Home/building4.svg";
import pic5 from "../assets/Home/building5.svg";
import pic6 from "../assets/Home/building6.svg";

import plane from "../assets/Home/plane.svg";

export default function StartYourJourney() {
  return (
    <div>
      <div className="flex flex-col gap-10 xl:items-center lg:items-start items-center xl:ml-0 lg:ml-24 ml-0 xl:mr-14 mr-0">
        <h1 className="text-center lg:text-6xl md:text-5xl text-4xl font-extrabold md:leading-normal leading-tight sm:w-auto w-[21rem]">
          Start Your <span className="text-blue-600">Journey</span> With Us
        </h1>
        <div className="xl:ml-0 lg:ml-10 ml-0 flex items-center justify-center gap-5 mb-28">
          <div className="flex justify-center items-center gap-5">
            <a href="/login">
              <button className="flex justify-center items-center px-6 py-3 rounded-3xl text-white bg-black buttonBoxShadow text-xl">
                Log in
              </button>
            </a>
          </div>
          <p className="text-xl text-[#959595] font-medium">or</p>
          <div className="flex justify-center items-center gap-5">
            <a href="/register">
              <button className="flex justify-center items-center px-6 py-3 rounded-3xl text-white bg-blue-600 text-xl">
                Register
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute -top-20 lg:left-[37rem] md:left-[22rem] sm:left-[15rem] left-[12rem]"
          src={plane}
          alt=""
        />
        <div className="flex items-baseline overflow-hidden">
          <img src={pic1} alt="" />
          <img src={pic2} alt="" />
          <img src={pic3} alt="" />
          <img src={pic4} alt="" />
          <img src={pic5} alt="" />
          <img src={pic6} alt="" />
        </div>
      </div>
    </div>
  );
}