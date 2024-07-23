import React, { FC, InputHTMLAttributes } from "react";
import { BtnIcon, Input, InputBtn, InputWrapper } from "./styles";

interface InputWithInlineBtnProps
  extends InputHTMLAttributes<HTMLInputElement> {
  width: number; // in px
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputWithInlineBtn: FC<InputWithInlineBtnProps> = ({
  width,
  value,
  setValue,
  ...inputProps
}) => {
  return (
    <InputWrapper width={width}>
      <Input
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
        {...inputProps}
      />
      <InputBtn>
        <BtnIcon />
      </InputBtn>
    </InputWrapper>
  );
};

export default InputWithInlineBtn;
