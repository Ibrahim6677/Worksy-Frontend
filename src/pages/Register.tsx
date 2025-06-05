import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/features/auth/authSlice";
import imgLogin from "../assets/images/Delivery _ order, account, transportation, subway, box, shopping.png";
import logo from "../assets/images/Vector1.svg";
import googleIcon from "../assets/images/Group.svg";
import micIcon from "../assets/images/Group9.svg";

const Register = () => {
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  interface RegisterFormValues {
    email: string;
    password: string;
    userName: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!email || !password || !userName) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    setErrorMessage("");
    registerUser({ email, password, userName } as RegisterFormValues)
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        setErrorMessage(error?.data?.message || "Registration failed");
      });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen px-4 py-8 bg-white gap-8">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl p-6 bg-[#EFE7FF] rounded-2xl shadow-[2px_2px_3px_3px_#F6F1FE]">
        <header className="w-full text-center mb-6">
          <div className="flex items-center justify-center gap-2">
            <img src={logo} alt="Worksy logo" />
            <h1 className="text-2xl font-bold font-amiko uppercase">Worksy</h1>
          </div>
        </header>

        <section className="w-full max-w-md">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-4">
            Sign Up To Worksy
          </h1>
          <p className="text-md text-gray-500 mb-4 text-center">
            Enter your email address
          </p>

          <div className="flex flex-col items-center">
            <button className="rounded-[49px] border border-[#E5E5E5] w-full h-[50px] bg-white py-3 px-6 flex items-center justify-center gap-2 text-black hover:shadow-md mb-3">
              <img src={googleIcon} alt="Google" />
              <span className="text-[#444] text-lg font-medium">
                Sign In With Google
              </span>
            </button>
            <button className="rounded-[49px] border border-[#E5E5E5] w-full h-[50px] bg-white py-3 px-6 flex items-center justify-center gap-2 text-black hover:shadow-md mb-6">
              <img src={micIcon} alt="Microsoft" />
              <span className="text-[#444] text-lg font-medium">
                Sign In With Microsoft
              </span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
              className="w-full p-3 rounded-2xl border border-[#878787] text-[#888] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@work.com"
              className="w-full p-3 rounded-2xl border border-[#878787] text-[#888] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 rounded-2xl border border-[#878787] text-[#888] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errorMessage && (
              <div className="text-red-500 text-sm mt-1">{errorMessage}</div>
            )}
            <input
              type="submit"
              value="Get Started"
              className="w-full p-3 mt-2 bg-[#6629DE] text-white rounded-2xl cursor-pointer hover:opacity-90 transition duration-300"
            />
          </form>

          <div className="text-sm text-gray-500 mt-3 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-[#a38bd2] underline ml-1">
              Sign in
            </Link>
          </div>
        </section>
      </div>

      <div className="hidden lg:block w-full max-w-xs md:max-w-sm">
        <img
          src={imgLogin}
          className="w-full max-h-[600px] object-contain"
          alt="Login illustration"
        />
      </div>
    </div>
  );
};

export default Register;
