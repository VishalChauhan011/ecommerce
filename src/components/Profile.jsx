import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { avatar, order , rewards , credit} from "../assets";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>User data not available.</p>;
  }

  return (
    <div className="divide-y-2 divide-solid divide-black font-manrope tracking-[1.5px]">
      <Navbar />
      <div className="flex justify-center">
        <div className="w-1/2 p-4 text-center">
          <h1 className="text-2xl font-semibold mt-6">Account</h1>
          <div className="bg-[#f2f5fb] p-4 rounded-lg shadow-md mt-8">
            <img
              src={avatar}
              alt=""
              className="w-24 h-24 rounded-full mx-auto my-4"
            />
            <p className="text-xl font-semibold my-4">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
            <button
            
              className="bg-white text-black py-2 px-4 mb-4 text-lg border border-gray-200 cursor-pointer hover:border-gray-800 mt-4"
            >
              Edit
            </button>
         
          </div>
          <div className="grid grid-cols-3 gap-4 mt-10 ">
              <div className="text-center bg-white p-2 rounded-lg shadow-md border border-gray-800">
                <div className="my-10">
                <img
                  src={order}
                  alt="Order Icon"
                  className="w-14 h-14 mx-auto my-4"
                />
                <p className="text-[20px] font-bold">Orders</p>
                <p className="text-[14px] text-gray-400">Check your order status</p>
                </div>
              </div>

              <div className="text-center bg-white p-2 rounded-lg shadow-md border border-gray-800">
                <div className="my-10">
                <img
                  src={rewards}
                  alt="Reward Icon"
                  className="w-14 h-14 mx-auto my-4"
                />
                <p className="text-[20px] font-bold">Rewards</p>
                <p className="text-[14px] text-gray-400">Check your rewards</p>
                </div>
              </div>


              <div className="text-center bg-white p-2 rounded-lg shadow-md border border-gray-800">
                <div className="my-10">
                <img
                  src={credit}
                  alt="Credit Icon"
                  className="w-14 h-14 mx-auto my-4"
                />
                <p className="text-[20px] font-bold">Credits</p>
                <p className="text-[14px] text-gray-400">Manage your credits</p>
                </div>
              </div>  
            </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
