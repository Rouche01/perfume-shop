import React, { FC, InputHTMLAttributes } from "react";
import { ErrorText } from "../generalStyles/index";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { ContactFormValues } from "../types/global";

const InputContainer = styled.div``;

const Label = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  margin-bottom: 10px;
  color: #888;
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

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  registerFn: UseFormRegister<ContactFormValues>;
  errorText?: string;
  name: "name" | "emailAddress" | "phone" | "company" | "message";
}

const InputField: FC<InputFieldProps> = (props) => {
  const { label, registerFn, errorText, name, ...inputProps } = props;

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input {...inputProps} {...registerFn(props.name)} />
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </InputContainer>
  );
};

export default InputField;
