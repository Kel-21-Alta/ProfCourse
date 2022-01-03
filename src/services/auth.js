import callAPI from "config/api/index.js";

// const ROOT_API = process.env;
// console.log("Process env ", ROOT_API);
const ROOT_API = "http://3.133.85.122:9090";
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
