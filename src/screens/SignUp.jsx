import React, { useState } from "react";
import { white_brand_icon, skull, google } from "../assets";
import "../fonts/MajorMonoDisplay-Regular.ttf";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../store/authSlice";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setemail] = useState("");
  const [emailError, setemailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError("Name is required");
    }
    if (!email) {
      setemailError("Email is required");
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    const values = { name, email, password };

    dispatch(signup(values))
      .unwrap()
      .then(() => navigate("/login"));
  };

  return (
    
    <div className="flex flex-row">
      <div className="flex flex-col w-[50%] h-screen bg-[#0E0E0E] px-[101px] ">
        <div className="w-[283px] h-[93px] mt-[49px]  ">
          <img src={white_brand_icon} />
        </div>
        <div className="flex flex-col items-center ">
          <div className="w-[509px] h-[158px] ">
            <p
              className="font-MajorMonoDisplay text-[36px] text-white font-[400]
                leading-[38px] text-center "
            >
              EMPOWER A BRILLIANT FUTURE WITH UNPARALLELED TECH ESSENTIALS.
            </p>
          </div>
          <img src={skull} className="mt-[-30px] " />
          <div className="w-[205px] ">
            <p
              className="font-manrope text-[20px] text-white font-[700]
                tracking-[0.8px] text-center mt-[-80px] mb-[12px] "
            >
              Gets a rewards and points for every purchase.
            </p>
          </div>
          <div className="w-[301px] ">
            <p
              className="font-manrope text-[14px]
                text-white/75 font-[400] tracking-[0.56px]
                 text-center "
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[50%] justify-center pl-[153px] pr-[120px] items-center ">
        <p className="font-manrope text-[36px] font-[600] leading-normal ">
          Love to Have You !!
        </p>
        <p className="font-manrope text-black/75 font-[400] leading-normal tracking-[0.96px] ">
          Start your Journey to buy and Earn Rewards
        </p>
        <form onSubmit={handleSubmit} >
          <p className="font-manrope text-[20px] font-[400] leading-normal tracking-[1px] mt-[25px]">
            Full Name
          </p>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Full Name"
            className={`border border-black/50 border-solid w-[457px] h-[43px] rounded-[5px] pl-[19px] mt-[9px] ${
              nameError ? "border-red-700" : ""
            }`}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
            }}
            value={name}
          />
          {nameError && (
            <div className="error text-red-700 font-manrope">{nameError}</div>
          )}

          <p className="font-manrope text-[20px] font-[400] leading-normal tracking-[1px] mt-[25px]">
            Email
          </p>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Your Email"
            className={`border border-black/50 border-solid w-[457px] h-[43px] rounded-[5px] pl-[19px] mt-[9px] ${
              emailError ? "border-red-700" : ""
            }`}
            onChange={(e) => {
              setemail(e.target.value);
              setemailError("");
            }}
            value={email}
          />
          {emailError && (
            <div className="error text-red-700 font-manrope">{emailError}</div>
          )}

          <p className="font-manrope text-[20px] font-[400] leading-normal tracking-[1px] mt-[25px]">
            Create Password
          </p>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            className={`border border-black/50 border-solid w-[457px] h-[43px] rounded-[5px] pl-[19px] mt-[9px] ${
              passwordError ? "border-red-700" : ""
            }`}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            value={password}
          />
          {passwordError && (
            <div className="error text-red-700 font-manrope">
              {passwordError}
            </div>
          )}

          <div className="flex flex-col gap-[15px] mt-[49px] items-center ">
            <button
              type="submit"
              className="flex w-[313px] h-[45px] bg-[#0E0E0E] rounded-full items-center justify-center cursor-pointer "
            >
              <p className="font-manrope text-[14px] text-white font-[800] leading-normal tracking-[0.42px] ">
                Sign Up
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
