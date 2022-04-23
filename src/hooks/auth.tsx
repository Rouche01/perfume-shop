import { createContext, FC, useContext } from "react";
import { AuthData } from "../types/auth";
import { useFirebaseAuth } from "./firebaseAuth";

const AuthContext = createContext<AuthData>({
  authUser: null,
  authError: null,
  setAuthError: () => {},
  loading: false,
  signIn: async () => {},
  createUser: async () => {},
  signoutUser: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: FC = ({ children }) => {
  const auth = useFirebaseAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
