import React from "react";

const AddEditJob = () => {
  return (
    <>
      {" "}
      <h1 class="mb-10 text-center section-title">Add New Job</h1>
      <div class="max-w-3xl mx-auto">
        <form class="space-y-6">
          <div class="fieldContainer">
            <label for="lwsJobTitle" class="text-sm font-medium text-slate-300">
              Job Title
            </label>
            <select
              id="lwsJobTitle"
              name="lwsJobTitle"
              autocomplete="lwsJobTitle"
              required
            >
              <option value="" hidden selected>
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
          <div class="fieldContainer">
            <label for="lwsJobType">Job Type</label>
            <select
              id="lwsJobType"
              name="lwsJobType"
              autocomplete="lwsJobType"
              required
            >
              <option value="" hidden selected>
                Select Job Type
              </option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          <div class="fieldContainer">
            <label for="lwsJobSalary">Salary</label>
            <div class="flex border rounded-md shadow-sm border-slate-600">
              <span class="input-tag">BDT</span>
              <input
                type="number"
                name="lwsJobSalary"
                id="lwsJobSalary"
                required
                class="!rounded-l-none !border-0"
                placeholder="20,00,000"
              />
            </div>
          </div>

          <div class="fieldContainer">
            <label for="lwsJobDeadline">Deadline</label>
            <input
              type="date"
              name="lwsJobDeadline"
              id="lwsJobDeadline"
              required
            />
          </div>
          <div class="text-right">
            <input
              type="submit"
              value="Save"
              class="lws-submit cursor-pointer btn btn-primary w-fit"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEditJob;
