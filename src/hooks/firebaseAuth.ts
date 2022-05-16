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
import { FirebaseUserData } from "../types/auth";
import { LoginFormvalues } from "../types/global";

type FirebaseUser = User & { accessToken?: string };

export const useFirebaseAuth = () => {
  const [firebaseAuthUser, setFirebaseAuthUser] =
    useState<FirebaseUserData | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = async ({ emailAddress, password }: LoginFormvalues) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        emailAddress,
        password
      );
      //@ts-ignore
      return response.user.accessToken;
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
      const response = await createUserWithEmailAndPassword(
        auth,
        emailAddress,
        password
      );
      // @ts-ignore
      return response.user.accessToken
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
    setFirebaseAuthUser(null);
  };

  const formatUser = (user: FirebaseUser) => ({
    uid: user.uid,
    email: user.email,
    accessToken: user.accessToken,
    refreshToken: user.refreshToken,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (authData: FirebaseUser | null) => {
      if (!authData) {
        setFirebaseAuthUser(null);
        return;
      }

      console.log(authData);

      const formattedUser = formatUser(authData);
      setFirebaseAuthUser(formattedUser);
    });
  }, []);

  return {
    signIn,
    createUser,
    signoutUser,
    firebaseAuthUser,
    authError,
    setAuthError,
    loading,
    setLoading,
  };
};
