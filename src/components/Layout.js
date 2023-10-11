import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Login from "../screens/Login.jsx";
import SignUp from "../screens/SignUp.jsx";
import Profile from "./Profile.jsx";

const Layout = ({ children }) => {
  const location = useLocation();

  const shouldRenderNavbarAndSidebar = () => {
   
    if (location.pathname === "/login" || location.pathname === "/signUp" || location.pathname==="/profile") {
      return false; 
    }

    return true; 
  };

  return (
    <div>
      {shouldRenderNavbarAndSidebar() && (
        <div className=" flex-1  h-screen bg-[#FFFFFF] flex-col divide-y-2 divide-solid divide-black sticky ">
          <Navbar />
          <div className="flex flex-row h-screen w-full divide-x-2 divide-solid divide-black">
            <Sidebar />
            <main className="flex w-full">{children}</main>
          </div>
        </div>
      )}

      {location.pathname === "/login" && <main>{Login}</main>}
      {location.pathname === "/signUp" && <main>{SignUp}</main>}
      {location.pathname === "/profile" && <main>{Profile}</main>}
    </div>
  );
};

export default Layout;
