import { FirebaseError } from "firebase/app";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../services/firebase";
import { UserData } from "../types/auth";
import { LoginFormvalues } from "../types/global";

export const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState<UserData | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = async ({ emailAddress, password }: LoginFormvalues) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, emailAddress, password);
      setLoading(false);
    } catch (err: FirebaseError | any) {
      setLoading(false);
      if (err instanceof FirebaseError) {
        console.log(err.code, "login error");
        setAuthError(err.code);
      } else {
        console.log(err);
        setAuthError("Something went wrong");
      }
    }
  };

  const createUser = async ({ emailAddress, password }: LoginFormvalues) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, emailAddress, password);
      setLoading(false);
    } catch (err: FirebaseError | any) {
      setLoading(false);
      if (err instanceof FirebaseError) {
        console.log(err.code, "register error");
        setAuthError(err.code);
      } else {
        console.log(err);
        setAuthError("Something went wrong");
      }
    }
  };

  const signoutUser = async () => {
    await signOut(auth);
    setAuthUser(null);
  };

  const formatUser = (user: User) => ({ uid: user.uid, email: user.email });

  useEffect(() => {
    onAuthStateChanged(auth, (authData) => {
      if (!authData) {
        setAuthUser(null);
        return;
      }

      const formattedUser = formatUser(authData);
      setAuthUser(formattedUser);
    });
  }, []);

  return {
    signIn,
    createUser,
    signoutUser,
    authUser,
    authError,
    setAuthError,
    loading,
  };
};
