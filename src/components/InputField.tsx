import React, { FC, InputHTMLAttributes } from "react";
import { ErrorText } from "../generalStyles/index";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { ContactFormValues, LoginFormvalues } from "../types/global";

const InputContainer = styled.div``;

const Label = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  margin-bottom: 10px;
  color: #888;
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 20px;
  padding: 10px 20px;
  border: 1px solid #eee;
  font-size: 0.9rem;
  font-family: Jost;
  &:focus {
    outline: none;
  }
`;

const PasswordToggleIcon = styled.span`
  color: #888;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  right: 10px;
  cursor: default;
`;

interface CustomFormValues {
  [key: string]: any;
}

type RegisterFn<T extends CustomFormValues> = UseFormRegister<T>;

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  registerFn: RegisterFn<ContactFormValues | LoginFormvalues>;
  errorText?: string;
  name:
    | "name"
    | "emailAddress"
    | "phone"
    | "company"
    | "message"
    | "password"
    | "firstName"
    | "lastName";
  isVisible?: boolean;
  setVisibility?: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputField: FC<InputFieldProps> = (props) => {
  const {
    label,
    registerFn,
    errorText,
    name,
    isVisible,
    setVisibility,
    ...inputProps
  } = props;

  const handlePasswordVisibleToggle = () => {
    if (setVisibility) {
      setVisibility(!isVisible);
    }
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputWrapper>
        <Input {...inputProps} {...registerFn(props.name)} />
        {name === "password" && (
          <PasswordToggleIcon
            onClick={handlePasswordVisibleToggle}
            className="material-icons material-icons-outlined md-18"
          >
            {isVisible ? "visibility" : "visibility_off"}
          </PasswordToggleIcon>
        )}
      </InputWrapper>
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </InputContainer>
  );
};

export default InputField;
