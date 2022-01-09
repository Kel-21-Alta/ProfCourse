import axios from "axios";

export default async function callAPI({ url, method, data }) {
  const response = await axios({
    url,
    method,
    data,
  }).catch((err) => err.response);
  const axiosResponse = response.data;
  if (axiosResponse.code > 300) {
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
