import axios from "axios";
import publicApi from "config/api/publicApi";
import Cookies from "js-cookie";

const ROOT_API = publicApi();

export async function getDataCourse() {
  const token = Cookies.get("token");
  const jwtToken = atob(token);
  let config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };
  const response = await axios.get(`${ROOT_API}/api/v1/courses  `, config);
  const axiosResponse = response.data.data;
  return axiosResponse;
}
export async function getDataSpesialisasi() {
  const token = Cookies.get("token");
  const jwtToken = atob(token);
  let config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };
  const response = await axios.get(`${ROOT_API}/api/v1/courses`, config);
  const axiosResponse = response.data.data;
  return axiosResponse;
}

export async function getSummaryServices() {
  const token = Cookies.get("token");
  const jwtToken = atob(token);
  let config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };
  const response = await axios.get(`${ROOT_API}/api/v1/summary`, config);
  const axiosResponse = response.data.data;
  return axiosResponse;
}