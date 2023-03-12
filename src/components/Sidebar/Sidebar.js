import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterType } from "../../features/filter/filterSlice";
import {
  ALL_JOBS,
  FULL_TIME,
  INTERN,
  REMOTE,
} from "../../features/filter/filterTypes";

const Sidebar = () => {
  const { type } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleJobsType = (type) => {
    dispatch(filterType(type));
  };
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <button
              className={`main-menu lws-allJob ${
                type === ALL_JOBS && "menu-active"
              }`}
              onClick={() => handleJobsType(ALL_JOBS)}
            >
              <i className="fa-solid fa-briefcase" />
              <span> All Available Jobs</span>
            </button>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <button
                  className={`sub-menu ${type === INTERN && "menu-active"}`}
                  onClick={() => handleJobsType(INTERN)}
                >
                  <i className="fa-solid fa-stop !text-[#FF5757]" />
                  Internship
                </button>
              </li>
              <li>
                <button
                  className={`sub-menu ${type === FULL_TIME && "menu-active"}`}
                  onClick={() => handleJobsType(FULL_TIME)}
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]" />
                  Full Time
                </button>
              </li>
              <li>
                <button
                  className={`sub-menu ${type === REMOTE && "menu-active"}`}
                  onClick={() => handleJobsType(REMOTE)}
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]" />
                  Remote
                </button>
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
