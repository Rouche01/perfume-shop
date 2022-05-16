import { createContext, FC, useContext, useState } from "react";
import { useRouter } from "next/router";
import { useLoginMutation, UserData } from "../graphql/generated/graphql";
import { AuthData } from "../types/auth";
import { LoginFormvalues, RegisterFormValues } from "../types/global";
import {
  AUTH_INFO_KEY,
  getAuthDataFromLocal,
  saveAuthData,
} from "../utils/auth";
import { useFirebaseAuth } from "./firebaseAuth";

const AuthContext = createContext<AuthData>({
  authUser: null,
  firebaseAuthUser: null,
  authError: null,
  setAuthError: () => {},
  loading: false,
  modSignIn: async () => {},
  modCreateUser: async () => {},
  modSignOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC = ({ children }) => {
  const { signIn, signoutUser, createUser, setAuthError, setLoading, ...rest } =
    useFirebaseAuth();
  const [login, {}] = useLoginMutation();

  const router = useRouter();

  const [authUser, setAuthUser] = useState<UserData | null>(() => {
    if (typeof window === "undefined") return null;
    const authData = getAuthDataFromLocal();
    if (!authData) return null;
    return authData;
  });

  const modSignIn = async ({ emailAddress, password }: LoginFormvalues) => {
    setLoading(true);
    const firebaseToken = await signIn({ emailAddress, password });
    const response = await login({
      variables: { firebaseToken },
    });

    if (response.data?.customLogin?.error) {
      const { message } = response.data.customLogin.error;
      if (message) {
        setAuthError(message);
      } else {
        setAuthError("Something went wrong");
      }
      setLoading(false);
    }

    if (response.data?.customLogin?.userData) {
      const { userData } = response.data.customLogin;

      saveAuthData(userData);
      setAuthUser(userData);
      setLoading(false);

      router.push("/shop");
    }
  };

  const modSignOut = async () => {
    await signoutUser();
    setAuthUser(null);
    localStorage.removeItem(AUTH_INFO_KEY);

    router.push("/login");
  };

  const modCreateUser = async ({
    emailAddress,
    password,
    firstName,
    lastName,
  }: RegisterFormValues) => {
    const firebaseToken = await createUser({ emailAddress, password });
  };

  return (
    <AuthContext.Provider
      value={{
        modSignIn,
        modSignOut,
        modCreateUser,
        setAuthError,
        authUser,
        ...rest,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
