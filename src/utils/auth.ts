import { UserData } from "@/graphql/generated/graphql";
import { FirebaseUserData } from "@/types/auth";

export const AUTH_INFO_KEY = "auth:info";
export const FIREBASE_AUTH_INFO_KEY = "firebase:auth:info";

export const saveAuthData = (userData: UserData) =>
  localStorage.setItem(AUTH_INFO_KEY, JSON.stringify(userData));

export const saveFirebaseAuthData = (data: FirebaseUserData) =>
  localStorage.setItem(FIREBASE_AUTH_INFO_KEY, JSON.stringify(data));

export const getAuthDataFromLocal = () => {
  const authDataString = localStorage.getItem(AUTH_INFO_KEY);

  if (!authDataString) {
    return null;
  }

  const authData: UserData = JSON.parse(authDataString);

  return authData;
};
