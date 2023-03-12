import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJob, deleteJob, fetchJobs } from "./jobAPI";

const initialState = {
  isLoading: false,
  isError: false,
  jobs: [],
  error: "",
};

// fetch async jobs thunk
export const fetchAsyncJobs = createAsyncThunk("job/fetchJobs", async () => {
  const data = await fetchJobs();
  return data;
});

// create job thunk
export const createJob = createAsyncThunk("job/createJob", async (job) => {
  const data = await addJob(job);
  return data;
});

// update job thunk
export const updateJob = createAsyncThunk(
  "job/updateJob",
  async ({ id, jobData }) => {
    const data = await addJob(id, jobData);
    return data;
  }
);

// remove job thunk
export const removeJob = createAsyncThunk("job/removeJob", async (id) => {
  const data = await deleteJob(id);
  return data;
});

// job slice
const jobSlice = createSlice({
  name: "job",
  initialState,
  extraReducers: (builder) => {
    // builder for fetch jobs
    builder
      .addCase(fetchAsyncJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchAsyncJobs.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs = action.payload;
        state.error = "";
      })
      .addCase(fetchAsyncJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });

    // builder for create job
    builder
      .addCase(createJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.jobs.push(action.payload);
        state.error = "";
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });

    // builder for update job
    builder
      .addCase(updateJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        // state.jobs.push(action.payload);
        state.error = "";

        // index to update
        const indexToUpdate = state.jobs.findIndex(
          (job) => job.id === action.meta.arg
        );
        state.jobs[indexToUpdate] = action.payload;
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });

    // builder for delete job
    builder
      .addCase(removeJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        // state.jobs.push(action.payload);
        state.error = "";

        state.jobs = state.jobs.filter((job) => job.id !== action.meta.arg);
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;
