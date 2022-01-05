import callAPI from "config/api/index.js";
import publicApi from "config/api/publicApi";

const ROOT_API = publicApi();
const API_VERSION = "api/v1";
export async function setLogin(data) {
  const url = `${ROOT_API}/${API_VERSION}/login`;
  return callAPI({
    url,
    method: "POST",
    data,
  });
}

export async function lupaPassword(data) {
  const url = `${ROOT_API}/${API_VERSION}/forgetpassword`;
  return callAPI({
    url,
    method: "PUT",
    data,
  });
}
