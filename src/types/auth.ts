import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import { UserData } from "../graphql/generated/graphql";
import { LoginFormvalues } from "./global";

export type FirebaseUserData = Pick<User, "email" | "uid">;

export interface AuthData {
  firebaseAuthUser: FirebaseUserData | null;
  authUser: UserData | null;
  authError: string | null;
  setAuthError: Dispatch<SetStateAction<string | null>>;
  loading: boolean;
  createUser: ({ emailAddress, password }: LoginFormvalues) => Promise<void>;
  modSignIn: ({ emailAddress, password }: LoginFormvalues) => Promise<void>;
  modSignOut: () => Promise<void>;
}
