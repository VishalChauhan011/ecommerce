import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

const Layout = ({ children }) => {
  return (
      <div className=" flex-1  h-screen bg-[#FFFFFF] flex-col divide-y divide-solid divide-black/30">
        <Navbar />
        <div className="flex flex-row h-screen w-full divide-x divide-solid divide-black/30">
          <Sidebar />
          <main className="flex w-full">{children}</main>
        </div>
      </div>
  );
};

export default Layout;
