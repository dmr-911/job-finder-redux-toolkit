import axios from "../../Axios/axios";

export const fetchJobs = async () => {
  const { data } = await axios.get("/jobs");

  return data;
};

export const addJob = async (job) => {
  const { data } = await axios.post("/jobs", job);

  return data;
};

export const editJob = async (id, jobData) => {
  const { data } = await axios.put(`/jobs/${id}`, jobData);

  return data;
};

export const deleteJob = async (id) => {
  const { data } = await axios.delete(`/jobs/${id}`);

  return data;
};
