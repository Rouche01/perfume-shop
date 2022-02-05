import React, { FC, TextareaHTMLAttributes } from "react";
import { ErrorText } from "../generalStyles/index";
import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { ContactFormValues } from "../types/global";

const Container = styled.div``;

const Label = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  margin-bottom: 10px;
  color: #888;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #eee;
  padding: 10px 20px;
  font-family: Jost;
  font-size: 0.9rem;
  &:focus {
    outline: none;
  }
`;

interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  errorText?: string;
  registerFn: UseFormRegister<ContactFormValues>;
  name: "name" | "emailAddress" | "phone" | "company" | "message";
}

const TextAreaInput: FC<TextAreaInputProps> = (props) => {
  const { label, registerFn, errorText, ...textAreaProps } = props;
  return (
    <Container>
      <Label>{label}</Label>
      <TextArea rows={10} {...textAreaProps} {...registerFn(props.name)} />
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </Container>
  );
};

export default TextAreaInput;
