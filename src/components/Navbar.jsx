import React from "react";
import { brand_icon } from "../assets";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {profile} from "../assets";
import { useState } from "react";



const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isHovered, setIsHovered] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

const handleprofile = () => {
  navigate('/profile');
}

const handleorder = () => {
  navigate('/order');
}

const handlehome = () => {
  navigate("/")
}

  return (
    <div className="bg-[#FFFFFF] flex flex-row py-[50px] h-[50px] items-center">
      <img src={brand_icon} className="ml-[130px] mr-[100px] cursor-pointer" alt="" onClick={handlehome} />
      <div className="items-center flex flex-row relative">
        <input
          type="text"
          placeholder="Search..."
          className="border-2 border-b-4 border-black border-solid w-[600px] h-[52px] pl-[30px] rounded-[20px] font-manrope"
        />
        <div className="cursor-pointer relative w-[142px] h-[45px] ml-6">
          <div
            className="flex w-[142px] h-[45px] bg-[#0E0E0E] relative left-[-7px] top-[-8px] z-10 rounded-[20px] items-center justify-center border-solid border-2 border-black cursor-pointer font-manrope overflow-hidden transition-left transition-top duration-100 ease-in-out hover:translate-x-1 hover:translate-y-1"
            onClick={() => {}}
          >
            <p className="text-[18px] text-center text-white font-manrope font-bold">
              Search
            </p>
          </div>
          <span className="h-[100%] w-[100%] bg-white border-2 border-black border-solid rounded-[18px] absolute left-0 top-0 box-border opacity-100 transition-opacity hover:duration-1000 hover:ease-linear"></span>
        </div>
      </div>
      {isAuthenticated ? (
         <div
         className="relative w-[142px] h-[45px] ml-[190px] cursor-pointer"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
       >
         <div>
           <img src={profile} alt="" className="w-[60px] h-[60px]" />
           {isHovered && (
             <div className="absolute top-[60px] left-[-55px] bg-white border border-gray-300 pl-4 pr-[100px] rounded-md shadow-lg ">
                <ul className="list-none text-[18px] font-manrope">
              <li className=" py-2 text-gray-500 hover:text-black" onClick={handleprofile}>Profile</li>
              <li className=" py-2 text-gray-500 hover:text-black" onClick={handleorder}>Orders</li>
            </ul>
            <button onClick={handleLogout} className="bg-white text-black py-2 px-4  mb-4 text-lg border border-gray-200 cursor-pointer hover:border-gray-800">
              Logout
            </button>
             </div>
           )}
         </div>
       </div>
      ) : (
        <div className="cursor-pointer relative w-[142px] h-[45px] ml-[190px]">
          <div
            className="flex w-[142px] h-[45px] bg-[#D6E35E] relative left-[-7px] top-[-8px] z-10 rounded-[20px] items-center justify-center border-solid border-2 border-black cursor-pointer font-manrope overflow-hidden transition-left transition-top duration-100 ease-in-out hover:translate-x-1 hover:translate-y-1"
            onClick={handleLogin}
          >
            <p className="text-[18px] text-center text-[#0E0E0E] font-manrope font-bold">
              Log In
            </p>
          </div>
          <span className="h-[100%] w-[100%] bg-black rounded-[18px] absolute left-0 top-0 box-border opacity-100 transition-opacity hover:duration-1000 hover:ease-linear"></span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
