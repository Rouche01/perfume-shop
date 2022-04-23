import React, { useEffect } from "react";
import Auth from "../../src/components/Auth";
import { useAuth } from "../../src/hooks/auth";
import { useLoginFormValidation } from "../../src/hooks/validationSchema";
import { LoginFormvalues } from "../../src/types/global";

const Login = () => {
  const { signIn, loading, authError, setAuthError } = useAuth();
  const handleLogin = async (data: LoginFormvalues) => {
    setAuthError(null);
    await signIn(data);
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
