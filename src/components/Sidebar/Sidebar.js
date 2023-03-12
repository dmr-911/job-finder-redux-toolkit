import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="/jobs" className="main-menu menu-active lws-allJob">
              <i className="fa-solid fa-briefcase" />
              <span> All Available Jobs</span>
            </a>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <a className="sub-menu" href="/jobs/internship">
                  <i className="fa-solid fa-stop !text-[#FF5757]" />
                  Internship
                </a>
              </li>
              <li>
                <a className="sub-menu" href="/jobs/fulltime">
                  <i className="fa-solid fa-stop !text-[#FF8A00]" />
                  Full Time
                </a>
              </li>
              <li>
                <a className="sub-menu" href="/jobs/remote">
                  <i className="fa-solid fa-stop !text-[#56E5C4]" />
                  Remote
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/jobs" className="main-menu lws-AddJob">
              <i className="fa-solid fa-file-circle-plus" />
              <span>Add NewJob</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
