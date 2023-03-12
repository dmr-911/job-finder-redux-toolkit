import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import { fetchAsyncJobs } from "../../features/job/jobSlice";
import Loading from "../Loading";
import Error from "../Error";

const Jobs = () => {
  const { isLoading, isError, jobs, error } = useSelector((state) => state.job);
  let updatedJobsArr = [...jobs];
  const { search, sortBySalary } = useSelector((state) => state.filter);

  // sort by salary conditions
  if (sortBySalary === "lowToHigh") {
    const lowToHighJobs = updatedJobsArr.sort(
      (a, b) => Number(a.salary) - Number(b.salary)
    );
    console.log("low to high", lowToHighJobs);
    updatedJobsArr = lowToHighJobs;
  } else if (sortBySalary === "highToLow") {
    const highToLowJobs = updatedJobsArr.sort(
      (a, b) => Number(b.salary) - Number(a.salary)
    );

    updatedJobsArr = highToLowJobs;
  } else if (sortBySalary === "default") {
    updatedJobsArr = [...jobs];
  }

  // search conditions
  if (search) {
    const searchedJobs = updatedJobsArr.filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase())
    );
    updatedJobsArr = searchedJobs;
  }

  const dispatch = useDispatch();
  // effect for fetching jobs
  useEffect(() => {
    dispatch(fetchAsyncJobs());
  }, [dispatch]);

  // decide what to render
  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <Error error={error} />;

  if (!isLoading && !isError && !jobs?.length)
    content = <div>No jobs found!</div>;

  if (!isLoading && !isError && updatedJobsArr?.length)
    content = updatedJobsArr?.map((job) => {
      // console.log(job);
      return <Job key={job.id} job={job} />;
    });

  return <div className="jobs-list ">{content}</div>;
};

export default Jobs;
