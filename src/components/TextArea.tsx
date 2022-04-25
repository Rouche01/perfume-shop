import React, { FC, TextareaHTMLAttributes } from "react";
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

const Container = styled.div``;

const Label = styled.p<LabelProps>`
  margin: 0;
  padding: 0;
  font-size: ${({ labelSize }) => (labelSize ? `${labelSize}rem` : "0.9rem")};
  margin-bottom: 10px;
  color: ${({ labelColor }) => (labelColor ? labelColor : "#888")};
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
  labelSize?: number; // in rem
  labelColor?: string; //hex code
  errorText?: string;
  registerFn: RegisterFn<
    | ContactFormValues
    | CustomerReviewFormValues
    | LoginFormvalues
    | RegisterFormValues
  >;
  name:
    | "name"
    | "emailAddress"
    | "phone"
    | "company"
    | "message"
    | "reviewComment";
}

const TextAreaInput: FC<TextAreaInputProps> = (props) => {
  const {
    label,
    labelSize,
    labelColor,
    registerFn,
    errorText,
    ...textAreaProps
  } = props;
  return (
    <Container>
      <Label labelSize={labelSize} labelColor={labelColor}>
        {label}
      </Label>
      <TextArea rows={10} {...textAreaProps} {...registerFn(props.name)} />
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </Container>
  );
};

export default TextAreaInput;
