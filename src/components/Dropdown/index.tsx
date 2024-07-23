import React, { forwardRef } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import withClickOutside, {
  WrappedComponentProps,
} from "@/hoc/withClickOutside";

import {
  Wrapper,
  DropdownContainer,
  DropdownInput,
  DropdownItem,
  DropdownList,
  Label,
} from "./styles";

interface DropdownProps {
  inputValue: string;
  inputOptions: string[];
  inputWidth: number;
  label?: string;
  setInputValue: (value: string) => void;
}

type Ref = HTMLDivElement;

const Dropdown = forwardRef<Ref, DropdownProps & WrappedComponentProps>(
  (
    {
      inputValue,
      inputOptions,
      label,
      inputWidth,
      setInputValue,
      open,
      setOpen,
    },
    ref
  ) => {
    return (
      <Wrapper ref={ref}>
        {label && <Label>{label}</Label>}
        <DropdownContainer>
          <DropdownInput width={inputWidth} onClick={() => setOpen(!open)}>
            <span
              style={{
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {inputValue.toString()}
            </span>{" "}
            <AiOutlineCaretDown color="#aaa" />
          </DropdownInput>
          <DropdownList show={open}>
            {inputOptions.map((option, idx) => (
              <DropdownItem
                key={idx}
                selected={option === inputValue}
                onClick={() => {
                  setInputValue(option);
                  setOpen(false);
                }}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        </DropdownContainer>
      </Wrapper>
    );
  }
);

Dropdown.displayName = "Dropdown";

export default withClickOutside(Dropdown);
