import React, { useEffect } from "react";
import Auth from "../../src/components/Auth";
import { useAuth } from "../../src/hooks/auth";
import { useRegisterFormValidation } from "../../src/hooks/validationSchema";
import { RegisterFormValues } from "../../src/types/global";

const Register = () => {
  const { modCreateUser, loading, authError, setAuthError } = useAuth();
  const handleCreateAccount = async (data: RegisterFormValues) => {
    setAuthError(null);
    await modCreateUser(data);
  };

  useEffect(() => {
    return () => setAuthError(null);
  }, [setAuthError]);

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
      loading={loading}
      error={authError}
    />
  );
};

export default Register;
