import Cookies from "js-cookie";

export default function getToken() {
  const token = Cookies.get("token");
  const tokenAtob = atob(token);
  let config = {
    headers: {
      Authorization: `Bearer ${tokenAtob}`,
    },
  };
  return config;
}
