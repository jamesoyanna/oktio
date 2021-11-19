import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getProject: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProjectSuccess: (state, action) => {
      state.isFetching = false;
      state.projects = action.payload;
    },
    getProjectFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteProject: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProjectSuccess: (state, action) => {
      state.isFetching = false;
      state.projects.splice(
        state.projects.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProjectFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateProject: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProjectSuccess: (state, action) => {
      state.isFetching = false;
      state.projects[
        state.projects.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateProjectFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addProjectStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProjectSuccess: (state, action) => {
      state.isFetching = false;
      state.projects.push(action.payload);
    },
    addProjectFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProject,
  getProjectSuccess,
  getProjectFailure,
  deleteProject,
  deleteProjectSuccess,
  deleteProjectFailure,
  updateProject,
  updateProjectSuccess,
  updateProjectFailure,
  addProject,
  addProjectSuccess,
  addProjectFailure,
} = projectSlice.actions;

export default projectSlice.reducer;
