import React, { FC, InputHTMLAttributes } from "react";
import { ErrorText } from "@/components/shared";
import {
  ContactFormValues,
  CustomerReviewFormValues,
  LoginFormvalues,
  RegisterFn,
  RegisterFormValues,
} from "@/types/global";
import {
  InputContainer,
  Input,
  InputWrapper,
  Label,
  PasswordToggleIcon,
} from "./styles";

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
