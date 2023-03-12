import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import { fetchAsyncJobs } from "../../features/job/jobSlice";
import Loading from "../Loading";
import Error from "../Error";

const Jobs = () => {
  const { isLoading, isError, jobs, error } = useSelector((state) => state.job);
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
    content = jobs.map((job) => <Job key={job.id} job={job} />);
    
  return <div className="jobs-list ">{content}</div>;
};

export default Jobs;
