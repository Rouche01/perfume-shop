import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginFormvalues, RegisterFormValues } from "@/types/global";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaFacebookF, FaApple, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import ErrorBox from "@/components/ErrorBox";
import InputField from "@/components/InputField";
import { RoundedButton } from "@/components/shared";
import Spinner from "@/components/Spinner";

import {
  AuthContainer,
  AuthForm,
  AuthLink,
  AuthSubtitle,
  AuthTitle,
  FormRow,
  ResetLink,
  SocialAuth,
} from "./styles";

interface AuthProps {
  title: string;
  subtitle: string;
  subtitleLink: string;
  subtitleHref: string;
  formAction: (data: any) => void;
  actionText: string;
  type: "register" | "login";
  validationSchema: any;
  loading: boolean;
  error: string | null;
}

const Auth: FC<AuthProps> = ({
  title,
  subtitle,
  subtitleLink,
  subtitleHref,
  formAction,
  actionText,
  type,
  validationSchema,
  loading,
  error,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormvalues & RegisterFormValues>({
    resolver: yupResolver(validationSchema),
  });

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <AuthContainer>
      <AuthTitle>{title}</AuthTitle>
      <AuthSubtitle>
        {subtitle}{" "}
        <Link href={subtitleHref} passHref>
          <AuthLink>{subtitleLink}</AuthLink>
        </Link>
      </AuthSubtitle>
      {error && <ErrorBox title="There was a problem" subtitle={error} />}
      <AuthForm>
        <form onSubmit={handleSubmit(formAction)}>
          {type === "register" && (
            <>
              <FormRow>
                <InputField
                  label="First name *"
                  name="firstName"
                  registerFn={register}
                  type="text"
                  errorText={errors.firstName?.message}
                />
              </FormRow>
              <FormRow>
                <InputField
                  label="Last name *"
                  name="lastName"
                  registerFn={register}
                  type="text"
                  errorText={errors.lastName?.message}
                />
              </FormRow>
            </>
          )}
          <FormRow>
            <InputField
              label="Email address *"
              name="emailAddress"
              registerFn={register}
              type="text"
              errorText={errors.emailAddress?.message}
            />
          </FormRow>
          <FormRow>
            <InputField
              label="Password *"
              name="password"
              registerFn={register}
              type={passwordVisible ? "text" : "password"}
              errorText={errors.password?.message}
              isVisible={passwordVisible}
              setVisibility={setPasswordVisible}
            />
          </FormRow>
          {type === "login" && (
            <ResetLink>
              <Link href="#">Forgot password?</Link>
            </ResetLink>
          )}
          <FormRow>
            <RoundedButton bgColor="#ab8e66" fullwidth type="submit">
              {!loading ? actionText : <Spinner size={1.2} />}
            </RoundedButton>
          </FormRow>
        </form>
      </AuthForm>
      <SocialAuth>
        <RoundedButton bgColor="#5A6175">
          <FaApple color="#fff" size={20} />
        </RoundedButton>
        <RoundedButton bgColor="#5A6175">
          <FaFacebookF color="#fff" size={20} />
        </RoundedButton>
        <RoundedButton bgColor="#5A6175">
          <FaGoogle color="#fff" size={20} />
        </RoundedButton>
      </SocialAuth>
    </AuthContainer>
  );
};

export default Auth;
