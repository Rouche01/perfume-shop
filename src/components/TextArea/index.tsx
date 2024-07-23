import React, { FC, TextareaHTMLAttributes } from "react";
import { ErrorText } from "@/components/shared";
import {
  ContactFormValues,
  CustomerReviewFormValues,
  LoginFormvalues,
  RegisterFn,
  RegisterFormValues,
} from "@/types/global";
import { Container, Label, TextArea } from "./styles";

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
