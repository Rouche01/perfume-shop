import React from "react";
import Auth from "../../src/components/Auth";
import { useLoginFormValidation } from "../../src/hooks/validationSchema";
import { LoginFormvalues } from "../../src/types/global";

const Login = () => {
  const handleLogin = (data: LoginFormvalues) => {
    console.log(data);
  };

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
    />
  );
};

export default Login;
