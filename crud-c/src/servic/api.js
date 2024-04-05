import axios from "axios";

const Url = "https://crud-servic.onrender.com";

export const getUsers = async (id) => {
  try {
    return await axios.get(`${Url}/all`);
  } catch (error) {
    console.log("Error while calling get user API", error);
  }
};

export const addUser = async (user) => {
  try {
    return await axios.post(`${Url}/add`, user);
  } catch (error) {
    console.log("Error while calling add user API", error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${Url}/${id}`);
  } catch {
    console.log("Error while calling delete api");
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${Url}/${id}`);
  } catch (error) {
    console.log("Error while calling getUser api", error);
  }
};

export const editUser = async (id, user) => {
  try {
    return await axios.put(`${Url}/${id}`, user);
  } catch (error) {
    console.log("Error while calling editUser api", error);
  }
};
