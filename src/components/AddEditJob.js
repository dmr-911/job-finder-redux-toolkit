import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createJob, updateJob } from "../features/job/jobSlice";

const initialState = {
  title: "",
  type: "",
  salary: "",
  deadline: "",
};

const AddEditJob = () => {
  const [form, setForm] = useState(initialState);

  const { isJobEdit } = useSelector((state) => state.job);
  const { id } = isJobEdit || {};

  useEffect(() => {
    if (isJobEdit?.id) {
      setForm({
        title: isJobEdit?.title,
        salary: isJobEdit?.salary,
        type: isJobEdit?.type,
        deadline: isJobEdit?.deadline,
      });
    } else {
      setForm(initialState);
    }
  }, [isJobEdit]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // add job handler
  const handleAddJob = (e) => {
    e.preventDefault();
    dispatch(createJob(form));
    navigate("/");
  };

  // update job handler
  const handleUpdateJob = (e) => {
    e.preventDefault();
    dispatch(updateJob({ id, jobData: form }));
    navigate("/");
  };

  return (
    <>
      <h1 className="mb-10 text-center section-title">
        {id ? "Update" : "Add New"} Job
      </h1>
      <div className="max-w-3xl mx-auto">
        <form
          className="space-y-6"
          onSubmit={id ? handleUpdateJob : handleAddJob}
        >
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
              value={form?.title}
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
              value={form?.type}
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
                value={form?.salary}
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
              value={form?.deadline}
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
              value={id ? "Update" : "Save"}
              className="lws-submit cursor-pointer btn btn-primary w-fit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEditJob;
