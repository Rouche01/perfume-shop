import { ApolloError } from "@apollo/client";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const useToastError = (error?: ApolloError) => {
  useEffect(() => {
    if (error?.message) {
      toast(error.message, {
        type: "error",
        position: "top-center",
        theme: "colored",
      });
    }
  }, [error?.message]);
};
