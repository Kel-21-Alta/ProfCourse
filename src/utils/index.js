import Cookies from "js-cookie";

export const login = (tokens) => {
  Cookies.set("token", tokens, { expires: 1 });
};

export const isLogin = () => {
  if (Cookies.get("token")) {
    return true;
  }
  return false;
};
