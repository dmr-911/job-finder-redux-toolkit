import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import { fetchAsyncJobs } from "../../features/job/jobSlice";
import Loading from "../Loading";
import Error from "../Error";

const Jobs = () => {
  const { isLoading, isError, jobs, error } = useSelector((state) => state.job);
  const { search, sortBySalary } = useSelector((state) => state.filter);
  let updatedJobsArr = [...jobs];

  // sort by salary conditions
  if (sortBySalary === "lowToHigh") {
    const newJobs = [...updatedJobsArr]?.sort(
      (a, b) => Number(a.salary) - Number(b.salary)
    );
    updatedJobsArr = newJobs;
  } else if (sortBySalary === "highToLow") {
    const newJobs = [...updatedJobsArr]?.sort(
      (a, b) => Number(b.salary) - Number(a.salary)
    );
    updatedJobsArr = newJobs;
  } else {
    updatedJobsArr = [...jobs];
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

  if (!isLoading && !isError && jobs?.length)
    content = updatedJobsArr?.map((job) => <Job key={job.id} job={job} />);

  return <div className="jobs-list ">{content}</div>;
};

export default Jobs;
