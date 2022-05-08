import React, { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

const InputWrapper = styled.div<{ width: number }>`
  position: relative;
  width: ${({ width }) => `${width}px`};
`;

const Input = styled.input`
  width: 100%;
  border-radius: 20px;
  padding: 9px 20px;
  border: 1px solid #eee;
  color: #888888;
  font-size: 1rem;
  font-family: Jost;
  &:focus {
    outline: none;
  }
`;

const InputBtn = styled.button`
  height: 100%;
  position: absolute;
  right: 0;
  cursor: pointer;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 1px solid #eee;
  background-color: transparent;
  padding: 0 12px;
  color: #888;
  border-left: none;
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    color: #ab8e66;
  }
`;

const BtnIcon = styled.span.attrs((props) => ({
  className: "material-icons material-icons-outlined md-20",
}))`
  &:after {
    font-family: "Material Icons";
    content: "arrow_forward";
  }
`;

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
