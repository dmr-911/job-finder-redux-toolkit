import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import { fetchAsyncJobs } from "../../features/job/jobSlice";
import Loading from "../Loading";
import Error from "../Error";
import {
  ALL_JOBS,
  FULL_TIME,
  INTERN,
  REMOTE,
} from "../../features/filter/filterTypes";

const Jobs = () => {
  const { isLoading, isError, jobs, error } = useSelector((state) => state.job);
  let updatedJobsArr = [...jobs];
  const { search, sortBySalary, type } = useSelector((state) => state.filter);

  // sort by salary conditions *****
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

  // search conditions *****
  if (search) {
    const searchedJobs = updatedJobsArr.filter((job) =>
      job.title.toLowerCase().includes(search.toLowerCase())
    );
    updatedJobsArr = searchedJobs;
  }

  // type conditions *****
  if (type === FULL_TIME) {
    const fullTimeJobs = updatedJobsArr.filter((job) =>
      job.type.toLowerCase().includes("full")
    );
    updatedJobsArr = fullTimeJobs;
  } else if (type === REMOTE) {
    const remoteJobs = updatedJobsArr.filter((job) =>
      job.type.toLowerCase().includes("remote")
    );
    updatedJobsArr = remoteJobs;
  } else if (type === INTERN) {
    const internJobs = updatedJobsArr.filter((job) =>
      job.type.toLowerCase().includes("intern")
    );
    updatedJobsArr = internJobs;
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
