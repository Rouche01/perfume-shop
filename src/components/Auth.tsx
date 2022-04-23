import React, { FC, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {
  CustomFormValues,
  LoginFormvalues,
  RegisterFormValues,
} from "../../src/types/global";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../src/components/InputField";
import { RoundedButton } from "../../src/components/Button";
import { FaFacebookF, FaApple, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import Spinner from "./Spinner";
import ErrorBox from "./ErrorBox";

const AuthContainer = styled.div`
  width: 650px;
  margin: 60px auto;
  border: 1px solid #dedede;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 30px 50px;
  background-color: #fff;
  &:hover {
    box-shadow: 0 0 10px #ddd;
  }
`;

const AuthTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  color: #222;
`;

const AuthSubtitle = styled.h6`
  margin: 0;
  padding: 0;
  color: #aaa;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
`;

const AuthLink = styled.a`
  color: #ab8e66;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ResetLink = styled.span`
  display: inline-block;
  text-align: left;
  font-size: 0.875rem;
  width: 100%;
  margin: 25px 0 10px;
  font-weight: 500;
  color: #222;
`;

const FormRow = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const AuthForm = styled.div`
  width: 100%;
  margin-top: 35px;
`;

const SocialAuth = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 20px;
  gap: 20px;
`;

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
