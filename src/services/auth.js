import axios from "axios";

// const ROOT_API = process.env.REACT_PUBLIC_API;
const ROOT_API = "http://localhost:9090";

const API_VERSION = "api/v1";
export async function setLogin(data) {
  const URL = "login";
  const response = await axios
    .post(`${ROOT_API}/${API_VERSION}/${URL}`, { data })
    .catch((err) => err.response);
  const axiosResponse = response.data;
  if (axiosResponse.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }
  const res = {
    error: false,
    message: response.data.message,
    data: response.data.data,
  };
  return res;
}
