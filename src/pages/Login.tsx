
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../redux/features/auth/authSlice";
import imgLogin from "../assets/images/Delivery _ order, account, transportation, subway, box, shopping.png";
import logo from "../assets/images/Vector1.svg";
import googleIcon from "../assets/images/Group.svg";
import micIcon from "../assets/images/Group9.svg";
const Login = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  interface LoginFormInputs {
    email: string;
    password: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    setErrorMessage("");
    try {
      await loginUser({ email, password } as LoginFormInputs).unwrap();
      navigate("/home");
    } catch {
      setErrorMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex flex-row items-center justify-around w-full h-screen capitalize">
      <div className="flex flex-col items-center justify-center max-w-3xl h-[90vh] p-4 bg-[#EFE7FF] rounded-2xl shadow-[2px 2px 3px 3px #F6F1Fe]">
        <header className="grid grid-cols-1 w-full p-8 items-center">
          <div className="text-center flex items-center justify-center gap-2">
            <img src={logo} alt="" />
            <h1 className="text-2xl font-bold font-amiko cursor-pointer uppercase">
              Worksy
            </h1>
          </div>
        </header>
        <section className="flex flex-col w-full max-w-3xl mx-auto px-4">
          <h1 className="text-5xl text-center font-bold tracking-wide mb-4">
            Sign in To Worksy
          </h1>
          <p className="text-md ml-2 text-gray-500 text-start">
            enter your email address
          </p>

          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit}>
              <input
                className="border rounded-2xl border-[#878787] p-2 text-lg text-[#888] text-amiko font-normal w-full focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3"
                type="email"
                placeholder="name@work.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border rounded-2xl border-[#878787] p-2 text-lg text-[#888] text-amiko font-normal w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                name="password"
              />
              <p className="text-md ml-2 text-[#a38bd2] underline text-start mt-2">
                forget your password?
              </p>
              {errorMessage && (
                <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
              )}

              <input
                className="border-none rounded-2xl w-full mt-4 bg-[#6629DE] p-3 text-white text-lg cursor-pointer hover:opacity-90 transition-opacity duration-300 hover:shadow-lg"
                type="submit"
                value="Get Started"
              />
            </form>

            <div className="text-sm font-normal text-gray-500 mt-3 ml-2">
              create a new account?
              <Link className="text-[#a38bd2] underline ml-2" to="/register">
                Sign up
              </Link>
            </div>
            <div className="flex items-center w-full mt-6 mb-2">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <button className="border-1 rounded-[49px] border-[#E5E5E5] w-[300px] h-[50px] bg-white py-3 px-6 gap-2.5 text-lg text-black cursor-pointer hover:shadow-md mb-4 flex items-start justify-center">
              <img src={googleIcon} alt="" />
              <span className="text-[#444] text-Roboto text-lg font-medium">
                Sign In With Google
              </span>
            </button>
            <button className="border-1 rounded-[49px] border-[#E5E5E5] w-[300px] h-[50px] bg-white py-3 px-6 gap-2.5 text-lg text-black cursor-pointer hover:shadow-md mb-4 flex items-start justify-center">
              <img src={micIcon} alt="" />
              <span className="text-[#444] text-Roboto text-lg font-medium">
                Sign In With Microsoft
              </span>
            </button>
          </div>
        </section>
      </div>
      <div>
        <img
          src={imgLogin}
          className="max-w-[399.5px] max-h-[600.08px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
