import axios from "../../Axios/axios";

export const addJob = async () => {
  const { data } = await axios.get("/jobs");

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
