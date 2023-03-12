import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterType } from "../features/filter/filterSlice";
import { cancelJobEdit } from "../features/job/jobSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    dispatch(cancelJobEdit());
    dispatch(filterType());
    navigate("/");
  };
  return (
    <nav className="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
      <img
        className="cursor-pointer"
        src="/images/logo.svg"
        alt=""
        onClick={handleLogoClick}
      />
    </nav>
  );
};

export default Navbar;
