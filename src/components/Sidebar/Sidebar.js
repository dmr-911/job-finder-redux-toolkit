import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/jobs" className="main-menu menu-active lws-allJob">
              <i className="fa-solid fa-briefcase" />
              <span> All Available Jobs</span>
            </Link>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <Link className="sub-menu" to="/jobs/internship">
                  <i className="fa-solid fa-stop !text-[#FF5757]" />
                  Internship
                </Link>
              </li>
              <li>
                <Link className="sub-menu" to="/jobs/fulltime">
                  <i className="fa-solid fa-stop !text-[#FF8A00]" />
                  Full Time
                </Link>
              </li>
              <li>
                <Link className="sub-menu" to="/jobs/remote">
                  <i className="fa-solid fa-stop !text-[#56E5C4]" />
                  Remote
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/jobs" className="main-menu lws-AddJob">
              <i className="fa-solid fa-file-circle-plus" />
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
