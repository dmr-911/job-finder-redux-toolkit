import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createJob } from "../features/job/jobSlice";

const initialState = {
  title: "",
  type: "",
  salary: "",
  deadline: "",
};

const AddEditJob = () => {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // add job handler
  const handleAddJob = (e) => {
    e.preventDefault();
    dispatch(createJob(form));
    navigate("/");
  };

  return (
    <>
      <h1 className="mb-10 text-center section-title">Add New Job</h1>
      <div className="max-w-3xl mx-auto">
        <form className="space-y-6" onSubmit={handleAddJob}>
          {/* select job field and options */}
          <div className="fieldContainer">
            <label
              htmlFor="lwsJobTitle"
              className="text-sm font-medium text-slate-300"
            >
              Job Title
            </label>
            <select
              id="lwsJobTitle"
              name="lwsJobTitle"
              autoComplete="lwsJobTitle"
              required
              defaultChecked=""
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }))
              }
            >
              <option value="" hidden>
                Select Job
              </option>
              <option>Software Engineer</option>
              <option>Software Developer</option>
              <option>Full Stack Developer</option>
              <option>MERN Stack Developer</option>
              <option>DevOps Engineer</option>
              <option>QA Engineer</option>
              <option>Product Manager</option>
              <option>Social Media Manager</option>
              <option>Senior Executive</option>
              <option>Junior Executive</option>
              <option>Android App Developer</option>
              <option>IOS App Developer</option>
              <option>Frontend Developer</option>
              <option>Frontend Engineer</option>
            </select>
          </div>

          {/* select job type and options */}
          <div className="fieldContainer">
            <label htmlFor="lwsJobType">Job Type</label>
            <select
              id="lwsJobType"
              name="lwsJobType"
              autoComplete="lwsJobType"
              defaultValue=""
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  type: e.target.value,
                }))
              }
              required
            >
              <option value="" hidden>
                Select Job Type
              </option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          {/* Salary input field */}
          <div className="fieldContainer">
            <label htmlFor="lwsJobSalary">Salary</label>
            <div className="flex border rounded-md shadow-sm border-slate-600">
              <span className="input-tag">BDT</span>
              <input
                type="number"
                name="lwsJobSalary"
                id="lwsJobSalary"
                onChange={(e) =>
                  setForm((prevState) => ({
                    ...prevState,
                    salary: e.target.value,
                  }))
                }
                required
                className="!rounded-l-none !border-0"
                placeholder="20,00,000"
              />
            </div>
          </div>

          {/* Date picker for deadline */}
          <div className="fieldContainer">
            <label htmlFor="lwsJobDeadline">Deadline</label>
            <input
              onChange={(e) =>
                setForm((prevState) => ({
                  ...prevState,
                  deadline: e.target.value,
                }))
              }
              type="date"
              name="lwsJobDeadline"
              id="lwsJobDeadline"
              required
            />
          </div>

          {/* Submit button */}
          <div className="text-right">
            <input
              type="submit"
              value="Save"
              className="lws-submit cursor-pointer btn btn-primary w-fit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEditJob;
