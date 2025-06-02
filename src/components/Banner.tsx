import { Link } from "react-router-dom";
import BannerImage from "../assets/images/bannerImage.svg"; // Adjust the path as necessary
const Banner = () => {
  return (
    <div className="flex items-center justify-around w-full">
      <div>
        <div className="flex flex-col justify-center text-amiko capitalize text-start w-[492px] space-y-6 text-[#000] gap-2">
          <h2 className="landing-2 font-bold text-[40px]">
            <span className="text-[#6629DE]">Collaborate,</span> Communicate,
            Succeed All in One Workspace
          </h2>
          <p className="w-[360px] text-[16px] font-normal">
            Worksy brings your team together with seamless messaging, file
            sharing, and HD video calls all in a secure, easy-to-use platform
          </p>
          <div className="hidden lg:flex space-x-2">
            <Link
              to="/workspace"
              className={`cursor-pointer rounded-2xl px-8 py-2.5 text-amiko font-normal text-sm text-center 
              hover:opacity-90 transition-opacity duration-300 bg-[#6629DE] text-white`}
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className={`cursor-pointer bg-transparent text-amiko text-center rounded-2xl px-8 
                text-[#6629DE] hover:bg-[#6629DE] hover:text-white py-2.5 text-sm font-normal
                transition duration-300`}
            >
              sign in
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img width={690} src={BannerImage} alt="messageImg" />
      </div>
    </div>
  );
};

export default Banner;
