import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import { LoginFormvalues } from "./global";

export type UserData = Pick<User, "email" | "uid">;

export interface AuthData {
  authUser: UserData | null;
  authError: string | null;
  setAuthError: Dispatch<SetStateAction<string | null>>;
  loading: boolean;
  createUser: ({ emailAddress, password }: LoginFormvalues) => Promise<void>;
  signIn: ({ emailAddress, password }: LoginFormvalues) => Promise<void>;
  signoutUser: () => Promise<void>;
}
