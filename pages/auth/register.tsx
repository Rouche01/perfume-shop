import React from "react";
import styled from "styled-components";
import Auth from "../../src/components/Auth";
import { useRegisterFormValidation } from "../../src/hooks/validationSchema";
import { RegisterFormValues } from "../../src/types/global";

const Register = () => {
  const handleCreateAccount = (data: RegisterFormValues) => {
    console.log(data);
  };

  const { validationSchema } = useRegisterFormValidation();

  return (
    <Auth
      actionText="Create an Account"
      subtitle="Already have an account?"
      subtitleHref="/auth/login"
      subtitleLink="Login"
      title="Register now"
      type="register"
      formAction={handleCreateAccount}
      validationSchema={validationSchema}
    />
  );
};

export default Register;
