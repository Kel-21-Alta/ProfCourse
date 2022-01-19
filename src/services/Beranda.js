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
  const response = await axios
    .get(`${ROOT_API}/api/v1/courses  `, config)
    .catch((err) => {
      if (err.toJSON().status > 400) {
        Cookies.remove("token");
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }
    });

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
  const response = await axios.get(
    `${ROOT_API}/api/v1/spesializations?limit=3`,
    config
  );
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
