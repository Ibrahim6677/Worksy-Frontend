import { Link } from "react-router-dom";
import BannerImage from "../assets/images/BannerImage.svg";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
      <div className="w-full lg:w-1/2 max-w-[600px] order-2 lg:order-1">
        <div className="flex flex-col justify-center text-amiko capitalize text-center lg:text-start space-y-6 text-[#000]">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-[40px] leading-tight">
            <span className="text-[#6629DE]">Collaborate,</span> Communicate,
            <br className="hidden sm:block" /> Succeed All in One Workspace
          </h2>
          <p className="text-base sm:text-lg font-normal max-w-[360px] mx-auto lg:mx-0 opacity-90">
            Worksy brings your team together with seamless messaging, file
            sharing, and HD video calls all in a secure, easy-to-use platform
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/workspace"
              className="w-full sm:w-auto cursor-pointer rounded-2xl px-8 py-3 text-amiko font-normal 
                text-sm text-center hover:scale-105 transition-all duration-300 
                bg-[#6629DE] text-white"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="w-full sm:w-auto cursor-pointer bg-transparent text-amiko text-center rounded-2xl 
                px-8 py-3 text-sm font-normal text-[#6629DE] border-2 border-[#6629DE]
                hover:bg-[#6629DE] hover:text-white transition-all duration-300"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 max-w-[690px] order-1 lg:order-2">
        <img 
          src={BannerImage} 
          alt="Worksy Collaboration Platform" 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
