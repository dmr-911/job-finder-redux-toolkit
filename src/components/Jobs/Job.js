import React from "react";
import { useDispatch } from "react-redux";
import { removeJob } from "../../features/job/jobSlice";

const Job = ({ job }) => {
  const { id, title, type, salary, deadline } = job || {};
  const dispatch = useDispatch();

  // decide text color based on job type
  let text;
  if (type === "Full Time") {
    text = "#FF8A00";
  } else if (type === "Remote") {
    text = "#56E5C4";
  } else {
    text = "#FF5757";
  }

  // handlers
  const handleJobDelete = () => {
    dispatch(removeJob(id));
  };

  return (
    <div className="job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            {/* Fulltime - #FF8A00,  */}
            {/* Internship - #FF5757,  */}
            {/* Remote - #56E5C4,  */}
            <i className={`fa-solid fa-stop !text-[${text}] text-lg mr-1.5`} />
            {type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5" />
            BDT {salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5" />
            {/* Closing on January 9, 2020 */}
            Closing on {deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button type="button" className="lws-edit btn btn-primary">
            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2" />
            Edit
          </button>
        </span>
        <span className="sm:ml-3">
          <button
            type="button"
            className="lws-delete btn btn-danger"
            onClick={handleJobDelete}
          >
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2" />
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default Job;
