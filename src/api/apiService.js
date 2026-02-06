import axiosInstance from "./axiosInstance";

export const getUsers = () => axiosInstance.get("/Crud-Operation");

export const createUser = (data) => axiosInstance.post("/Crud-Operation", data);

export const updateUser = (id, data) =>
  axiosInstance.put(`/Crud-Operation/${id}`, data);

export const deleteUser = (id) => axiosInstance.delete(`/Crud-Operation/${id}`);
