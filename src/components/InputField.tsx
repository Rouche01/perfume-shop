import React, { FC, InputHTMLAttributes } from "react";
import { ErrorText } from "../generalStyles/index";
import styled from "styled-components";
import {
  ContactFormValues,
  CustomerReviewFormValues,
  LoginFormvalues,
  RegisterFn,
  RegisterFormValues,
} from "../types/global";

type LabelProps = {
  labelSize?: number; // in rem
  labelColor?: string; // hex color
};

const InputContainer = styled.div``;

const Label = styled.p<LabelProps>`
  margin: 0;
  padding: 0;
  font-size: ${({ labelSize }) => (labelSize ? `${labelSize}rem` : "0.9rem")};
  margin-bottom: 10px;
  color: ${({ labelColor }) => (labelColor ? labelColor : "#888")};
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

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelSize?: number; // in rem
  labelColor?: string; // hex color
  registerFn: RegisterFn<
    | ContactFormValues
    | LoginFormvalues
    | RegisterFormValues
    | CustomerReviewFormValues
  >;
  errorText?: string;
  name:
    | "name"
    | "emailAddress"
    | "phone"
    | "company"
    | "message"
    | "password"
    | "firstName"
    | "lastName"
    | "reviewComment";
  isVisible?: boolean;
  setVisibility?: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputField: FC<InputFieldProps> = (props) => {
  const {
    label,
    labelColor,
    labelSize,
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
      <Label labelColor={labelColor} labelSize={labelSize}>
        {label}
      </Label>
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
