import { baseUrl } from "../config";
import axios from "axios";
export const getUsers = () => {
  return axios.get(`${baseUrl}/users`);
};

export const deleteUsers = (userId) => {
  return axios.delete(`${baseUrl}/users/${userId}`);
};
