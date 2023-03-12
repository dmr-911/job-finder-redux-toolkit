import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <Navbar />
        <Sidebar />
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
