import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
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
} from './projectRedux';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProjects = async (dispatch) => {
  dispatch(getProject());
  try {
    const res = await publicRequest.get("/project");
    dispatch(getProjectSuccess(res.data));
  } catch (err) {
    dispatch(getProjectFailure());
  }
};

export const deleteAProject = async (id, dispatch) => {
  dispatch(deleteProject());
  try {
 
    dispatch(deleteProjectSuccess(id));
  } catch (err) {
    dispatch(deleteProjectFailure());
  }
};

export const updateAProject = async (id, project, dispatch) => {
  dispatch(updateProject());
  try {
    // update
    dispatch(updateProjectSuccess({ id, project }));
  } catch (err) {
    dispatch(updateProjectFailure());
  }
};
export const addAProduct = async (project, dispatch) => {
  dispatch(addProject());
  try {
    const res = await userRequest.post(`/projects`, project);
    dispatch(addProjectSuccess(res.data));
  } catch (err) {
    dispatch(addProjectFailure());
  }
};