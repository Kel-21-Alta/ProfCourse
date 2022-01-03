import axios from "axios";
import Cookies from "js-cookie";

export async function getDataCourse() {
  const token = Cookies.get("token");
  const jwtToken = atob(token);
  let config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };
  const response = await axios.get(
    `http://3.133.85.122:9090/api/v1/courses`,
    config
  );
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
    `http://3.133.85.122:9090/api/v1/courses`,
    config
  );
  const axiosResponse = response.data.data;
  return axiosResponse;
}
