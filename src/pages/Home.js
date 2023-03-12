import React from "react";
import { useDispatch } from "react-redux";
import Jobs from "../components/Jobs/Jobs";
import { searchJob, sortBySalary } from "../features/filter/filterSlice";

const Home = () => {
  const dispatch = useDispatch();

  // salary sort handler
  const handleSalarySort = (e) => {
    dispatch(sortBySalary(e.target.value));
  };

  // search handler
  const handleSearch = (e) => {
    dispatch(searchJob(e.target.value));
  };

  return (
    <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
      <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
        <h1 className="section-title">All Available Jobs</h1>
        <div className="flex gap-4">
          <div className="search-field group flex-1">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500" />
            <input
              type="text"
              placeholder="Search Job"
              className="search-input"
              id="lws-searchJob"
              onChange={handleSearch}
            />
          </div>
          <select
            id="lws-sort"
            name="sort"
            autoComplete="sort"
            className="flex-1"
            onChange={handleSalarySort}
          >
            <option value="default">Default</option>
            <option value="lowToHigh">Salary (Low to High)</option>
            <option value="highToLow">Salary (High to Low)</option>
          </select>
        </div>
      </div>
      <Jobs />
    </main>
  );
};

export default Home;
