import { verifyUser } from "@/utils";

export const authentication = (): string => {
  const isTokenExist = JSON.parse(localStorage.getItem("token"));
  const isSessionToken = JSON.parse(sessionStorage.getItem("token"));
  if (!isSessionToken && !isTokenExist) {
    return "/";
  }
  if (isSessionToken && !verifyUser(isSessionToken)) {
    return "/"
  }
  if (isTokenExist && !verifyUser(isTokenExist)) {
    return "/"
  }
  return isSessionToken || isTokenExist;
};
