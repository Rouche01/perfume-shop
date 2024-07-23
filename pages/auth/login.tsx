import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Auth from "@/components/Auth";
import { useAuth } from "@/hooks/auth";
import { LoginFormvalues } from "@/types/global";
import { useLoginFormValidation } from "@/hooks/validationSchema";

const Login = () => {
  const { modSignIn, loading, authError, setAuthError } = useAuth();
  const router = useRouter();

  const handleLogin = async (data: LoginFormvalues) => {
    setAuthError(null);
    await modSignIn(data, router.query.from as string);
  };

  useEffect(() => {
    return () => setAuthError(null);
  }, [setAuthError]);

  const { validationSchema } = useLoginFormValidation();

  return (
    <Auth
      actionText="Login"
      subtitle="New to Shop?"
      subtitleHref="/auth/register"
      subtitleLink="Sign up for free"
      formAction={handleLogin}
      title="Login your Account"
      type="login"
      validationSchema={validationSchema}
      loading={loading}
      error={authError}
    />
  );
};

export default Login;
